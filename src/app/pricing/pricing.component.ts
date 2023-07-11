import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ModalserviceService } from '../services/modalservice.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  products:any;
  constructor(private service:ModalserviceService, private route:Router){}

  
  edit(product:any){
    product.isEdit=true;
  }
  update(product:any){
    product.isEdit=false;
    this.service.updateproduct(product);
  }


  
  cart(product:any){
    this.service.addtocart(product);
    this.route.navigateByUrl('/navbar/cart')
  }
  ngOnInit(){ 
    this.service.viewProducts().subscribe((res)=>{
      this.products=res;
      console.log(this.products)
    })
  }

 
 
  
}
