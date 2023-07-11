import { Component } from '@angular/core';
import { ModalserviceService } from '../services/modalservice.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent {

  shedule:any
  constructor( private service:ModalserviceService){}
  heading="Event Schedule"
  paragraph="But I must explain to you how all this mistaken idea of denouncing pleasure and prai sing pain was born and I will give a complete account."
  ngOnInit(){ 
    this.service.viewShedule().subscribe((res)=>{
      this.shedule=res;
      console.log(this.shedule)
    })
  }
}
