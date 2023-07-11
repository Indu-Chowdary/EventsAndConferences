import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SheduleComponent } from './shedule/shedule.component';
import { PricingComponent } from './pricing/pricing.component';
import { CARTComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component:FirstpageComponent
  },
  {
    path:'navbar',
    component:NavbarComponent,
    children:[
      {
      path:'about',
      component:AboutComponent
      },
      {
        path:'speaker',
        component:SpeakerComponent
        },
        {
          path:'shedule',
          component:SheduleComponent
          },
          {
            path:'pricing',
            component:PricingComponent
          },
          {
            path:'cart',
            component:CARTComponent
          },
          {
            path:'checkout',
            component:CheckoutComponent
          },
          {
            path:'blog',
            component:BlogComponent
          },
          {
            path:'contact',
            component:ContactComponent
          }

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
