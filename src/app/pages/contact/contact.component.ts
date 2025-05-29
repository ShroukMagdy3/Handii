import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly toastrService= inject(ToastrService)
  workshops = [
    {
      name: 'Pottery Workshop',
      instructor: 'Yasmine Abdelaziz',
      specialty: 'Pottery Artist',
      schedule: 'Every Monday at 5 PM',
      image: 'https://images.alwatanvoice.com/news/large/a953a0eb-838d-444b-856e-f11b0e624edf.jpg'
    },
    {
      name: 'Knitting Workshop',
      instructor: 'Mona Adel',
      specialty: 'Knitting Expert',
      schedule: 'Every Wednesday at 3 PM',
      image: 'https://i1.rgstatic.net/ii/profile.image/884939469905923-1587997419585_Q512/Basma-Ataallah.jpg'
    },
    {
      name: 'Embroidery Workshop',
      instructor: 'Rania Fouad',
      specialty: 'Embroidery Specialist',
      schedule: 'Every Saturday at 1 PM',
      image: 'https://blogs.worldbank.org/content/dam/sites/blogs/img/team/mgr/Gupta_Garima.jpg'
    }
  ];


  register(){
    this.toastrService.success('REGISTERED', 'success', {
    positionClass: 'toast-center-center',
    timeOut: 2000
  })
  }
}
