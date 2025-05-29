import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-give',
  imports: [CommonModule ,FormsModule],
  templateUrl: './give.component.html',
  styleUrl: './give.component.css'
})
export class GiveComponent {
  item = {
    name: '',
    category: '',
    description: '',
    image: ''
  };
  submitted = false;



  submitForm() {
    this.submitted = true;
    console.log('Submitted Item:', this.item);
  }
}
