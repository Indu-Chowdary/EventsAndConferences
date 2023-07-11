import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
 
  username:any;
  password:any;
  user:any;
  
    constructor(private route:Router){}
    dologin(){
      if(this.username==null && this.password==null){
        console.log("enter details");
      }
        if(this.password=="12345")
        {
          this.user={
            "username":this.username,
            "password":this.password
            }
  
            localStorage.setItem('loggedin',JSON.stringify(this.user));
            this.route.navigateByUrl('/navbar/about')
        }
    }
  

    }
    
  