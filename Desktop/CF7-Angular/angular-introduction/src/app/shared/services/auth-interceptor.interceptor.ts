import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip interceptor in server-side rendering
    if (!isPlatformBrowser(this.platformId)) {
      return next.handle(req);
    }

    // Skip for authentication requests or specific routes
    if (req.url.includes('/auth/') || req.url.includes('/login')) {
      return next.handle(req);
    }

    const authToken = localStorage.getItem('access_token');
    
    // Check if token exists and is not expired
    if (!authToken || this.isTokenExpired(authToken)) {
      return next.handle(req);
    }

    // Clone request and add authorization header
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });

    return next.handle(authRequest);
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decoded = this.decodeToken(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (e) {
      return true;
    }
  }

  private decodeToken(token: string): any {
    // Simple JWT decoding (for demonstration)
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
};