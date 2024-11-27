import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.toastr.error('please enter email and password', 'Error');
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        const token  = response.token;
        this.authService.saveToken(token)
        this.toastr.success('Logged in successfully', 'Success');
        console.log('savedToken: ', token);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.toastr.error(error.error.message, 'Error');
        console.error('Error: ', error);
      }
    })
  }
}
