import { Component } from '@angular/core';
import { ModalserviceService } from '../services/modalservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact:any;
  constructor(private service:ModalserviceService){}
  ngOnInit(){ 
    this.service.viewContact().subscribe((res)=>{
      this.contact=res;
      console.log(this.contact)
    })
  }
}
