import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean;
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.hide = true;
    this.username = '';
    this.password = '';
  }

  login() {
    this.authService.getToken(this.username, this.password).subscribe({
      next: (value: any) => {
        document.cookie = `token=${value.access_token}`;
        this.router.navigate(['/productos']);
      },
    });
  }
}
