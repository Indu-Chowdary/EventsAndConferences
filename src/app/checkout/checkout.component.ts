import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  name:any;
  email:any;
  address:any;
  creditcart:any;
  cvv:any;
  expirycart:any



  submit(){
    confirm("Your Name" +this.name +"Email"+this.email+
    "creditcard Number:" +this.creditcart+ "CVV"+ this.cvv+ "ExpiryCard :"+this.expirycart)
  }
}
