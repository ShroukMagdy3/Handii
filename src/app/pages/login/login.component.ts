import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly toastrService = inject(ToastrService)
  submit() {
    this.router.navigate(['/home']);
  }
  logIn(){
    this.toastrService.success('Valid ACCOUNT')
  }
}
