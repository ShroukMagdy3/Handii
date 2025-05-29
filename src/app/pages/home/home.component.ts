import { Component } from '@angular/core';
declare let ScrollReveal:any;
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
ngOnInit(): void {
  ScrollReveal().reveal('.reveal', {
    delay: 300,
    distance: '50px',
    duration: 900,
    origin: 'bottom',
    easing: 'ease-in-out'

  });
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
