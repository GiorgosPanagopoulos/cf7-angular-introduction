import { Injectable, inject, signal, effect, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';

const API_URL = `${environment.apiURL}/api/users`;
const API_URL_AUTH = `${environment.apiURL}/api/auth`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  user$ = signal<LoggedInUser | null>(null);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.initializeUserFromToken();
    }

    effect(() => {
      if (this.user$()) {
        console.log('User Logged In', this.user$()?.username);
      } else {
        console.log("No user Logged in");
      }
    });
  }

  private initializeUserFromToken(): void {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      try {
        const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser;
        this.user$.set({
          username: decodedTokenSubject.username,
          email: decodedTokenSubject.email,
          roles: decodedTokenSubject.roles
        });
      } catch (error) {
        console.error('Error decoding token:', error);
        this.clearUserData();
      }
    }
  }

  registerUser(user: User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user);
  }

check_duplicate_email(email: string) {
  return this.http.get<{status: boolean, data: User}>(
    `${API_URL}/check_duplicate_email/${email}`
  );
}

  loginUser(credentials: Credentials) {
    return this.http.post<{status: boolean, data: string}>(
      `${API_URL_AUTH}/login`, credentials
    );
  }

  logoutUser() {
    this.user$.set(null);
    if (this.isBrowser) {
      localStorage.removeItem('access_token');
    }
    this.router.navigate(['login']);
  }

  isTokenExpired(): boolean {
    if (!this.isBrowser) return true;

    const token = localStorage.getItem('access_token');
    if (!token) return true;

    try {
      const decoded = jwtDecode(token);
      const exp = decoded.exp;
      const now = Math.floor(Date.now() / 1000);
      return exp ? exp < now : true;
    } catch (err) {
      return true;
    }
  }

  redirectToGoogleLogin() {
    if (!this.isBrowser) return;

    const clientId = '740464771797-o5sjgbhiukc6k2b6q7371o2v7ufoushh.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/api/auth/google/callback';
    const scope = 'email profile';
    const responseType = 'code';
    const accessType = 'offline';
    
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

    window.location.href = url;
  }

  private clearUserData(): void {
    this.user$.set(null);
    if (this.isBrowser) {
      localStorage.removeItem('access_token');
    }
  }
}