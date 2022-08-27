import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  ConsumirSerrvicio() {
    this.authService.getToken().subscribe({
      next: value => {
        console.log('next', value);
      },
      complete: () => {
        console.log('complete');
      },
      error: err => {
        console.log('error', err);
      },
    });
  }
}
