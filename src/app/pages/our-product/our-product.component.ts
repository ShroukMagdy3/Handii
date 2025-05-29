import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-our-product',
  imports: [],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css'
})
export class OurProductComponent {
  private readonly toastrService = inject(ToastrService)
  isFilterVisible: boolean = true;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
  addTocart(){
  this.toastrService.success('ADDED TO CART 🛒', 'success', {
  positionClass: 'toast-center-center',
  timeOut: 2000
});
}
addToWish(){
  this.toastrService.success('ADDED TO WISHList ❤️' ,'sucess' , {
  positionClass: 'toast-center-center',
  timeOut: 2000
}

  )
}
}
