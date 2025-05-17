import { signal } from '@angular/core';
import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { 
  AbstractControl,
  FormControl, 
  FormGroup, 
  ReactiveFormsModule, 
  Validators 
} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  registrationStatus = signal<{success: boolean; message: string}>({
    success: false,
    message: 'Not attempted yet'
  });

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  }, this.passwordConfirmValidator);

  private passwordConfirmValidator(control: AbstractControl): {[key:string]: boolean} | null {
    const form = control as FormGroup;
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({passwordMismatch: true});
      return {passwordMismatch: true};
    }
    
    return null;
  }

  onSubmit() {
    if (this.form.invalid) return;

    const data: User = {
      username: this.form.value.username ?? '',
      password: this.form.value.password ?? '',
      name: this.form.value.name ?? '',
      surname: this.form.value.surname ?? '',
      email: this.form.value.email ?? '',
      address: {
        area: this.form.value.address?.area ?? '',
        road: this.form.value.address?.road ?? ''
      }
    };

    this.userService.registerUser(data).subscribe({
      next: (response) => {
        console.log("User Saved", response);
        this.registrationStatus.set({success: true, message: "User registered"});
      },
      error: (error: HttpErrorResponse) => {
        console.error("Registration failed", error);
        const errorMessage = error.error?.data?.errorResponse?.errmsg || 'Registration failed';
        this.registrationStatus.set({success: false, message: errorMessage});
      }
    });
  }

  checkDuplicateEmail() {
    const email = this.form.get("email")?.value;

    if (!email || this.form.get("email")?.invalid) return;

    this.userService.check_duplicate_email(email).subscribe({
      next: () => {
        this.form.get("email")?.setErrors(null);
      },
      error: (error: HttpErrorResponse) => {
        console.error("Email check failed", error);
        this.form.get('email')?.setErrors({duplicateEmail: true});
      }
    });
  }

  registerAnother() {
    this.form.reset();
    this.registrationStatus.set({success: false, message: "Not attempted yet"});
  }
}