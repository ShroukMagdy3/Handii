import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private readonly toastrService =inject(ToastrService)


  signUp(){
    this.toastrService.success('ACCOUNT IS CREATED')
  }

}
