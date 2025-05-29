import { Component } from '@angular/core';
declare let ScrollReveal:any;
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit(): void {

    ScrollReveal().reveal('.from-left', {
      delay: 500,
      distance: '100px',
      duration: 1500,
      origin: 'left',
      easing: 'ease-in-out',
      reset: true
    });
    ScrollReveal().reveal('.from-right', {
      delay: 500,
      distance: '100px',
      duration: 1500,
      origin: 'right',
      easing: 'ease-in-out',
      reset: true
    });

  }



}
