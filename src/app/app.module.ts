import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SheduleComponent } from './shedule/shedule.component';
import { PricingComponent } from './pricing/pricing.component';
import { CARTComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavbarComponent,
    AboutComponent,
    SpeakerComponent,
    SheduleComponent,
    PricingComponent,
    CARTComponent,
    CheckoutComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
