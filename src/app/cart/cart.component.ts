import { Component } from '@angular/core';
import { ModalserviceService } from '../services/modalservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CARTComponent {
  products:any;
  constructor(private service:ModalserviceService){}
  delete(product:any){
   this.service.deletecart(product);
  }
  checkout(){

  }
  
  
 ngOnInit(){
   this.service.viewcart().subscribe((res)=>{
     this.products=res;
   })
 }
}
