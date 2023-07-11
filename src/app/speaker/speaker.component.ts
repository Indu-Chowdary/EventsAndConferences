import { Component } from '@angular/core';
import { ModalserviceService } from '../services/modalservice.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent {

speaker:any
  constructor( private service:ModalserviceService){}
  ngOnInit(){ 
    this.service.viewSpeaker().subscribe((res)=>{
      this.speaker=res;
      console.log(this.speaker)
    })
  }
}
