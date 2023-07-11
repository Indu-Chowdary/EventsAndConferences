import { Injectable } from '@angular/core';

import {of} from 'rxjs';
import { products,contact,speaker, shedule} from './modalservice';
@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {
  cart:products[]=[];
  private productsList:products[]=[
    {
      
      cartName:"PERSONAL",
    
      cartDesc:"But I must explain to you how all this mistaken idea of dnouncing pleasure.",
      cartPrice:"$89.99/month",
      isEdit:false
      
    },
    {
    
      cartName:"FAMILY PACK",
    
      cartDesc:"But I must explain to you how all this mistaken idea of dnouncing pleasure.",
      cartPrice:"$209.99/month",
      isEdit:false
      
    
    },
    {
    
      cartName:"SMALL TEAM",
    
      cartDesc:"But I must explain to you how all this mistaken idea of dnouncing pleasure.",
      cartPrice:"$149.99/month",
      isEdit:false

      
    
    }

  ]

  private contactList:contact[]=[
    {
      conName:"Chief Editor",
      conDesc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis. In dui magna posuere.",
      conEmail:"chief@website.net"
    },
    {
      conName:"Technical Director",
      conDesc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis . In dui magna posuere.",
      conEmail:"director@website.net"
    },
    {
      conName:"Lead Designer",
      conDesc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis. In dui magna posuere.",
      conEmail:"designer@website.net"
    }
  ]

  private speakerList:speaker[]=[
    {
    speakername:"Louise.W.lbarra",
    image:"assets/01.jpg",
    speakerdesignation:"UI/UX Designer"
  },
  {
    speakername:"Louise.W.lbarra",
    image:"assets/02.jpg",
    speakerdesignation:"UI/UX Designer"
  },
  {
    speakername:"Louise.W.lbarra",
    image:"assets/03.jpg",
    speakerdesignation:"UI/UX Designer"
  },
  {
    speakername:"Louise.W.lbarra",
    image:"assets/04.jpg",
    speakerdesignation:"UI/UX Designer"
  },
  {
    speakername:"Louise.W.lbarra",
    image:"assets/05.jpg",
    speakerdesignation:"UI/UX Designer"
  },
  {
    speakername:"Louise.W.lbarra",
    image:"assets/06.jpg",
    speakerdesignation:"UI/UX Designer"
  },


  ]

  private sheduleList:shedule[]=[
    {
      cardhead:"ANIMATING SVG FILES WITH SVGATOR FORMATE",
      cardDesc:"On the other hand we denounce with right eous indignation and dislike men who are so beguiled and success note.",
      cardTime:"10:30",
      cardLocation:"207 AVUNUE,USA",
      cardImage:"assets/4.png",
      cardImgDesc:"Christopher Manly",
      cardImgdesg:"Teachers"
    },
    {
      cardhead:"INTRODUCHTION TO ANIMATION",
      cardDesc:"On the other hand we denounce with right eous indignation and dislike men who are so beguiled and success note.",
      cardTime:"10:30",
      cardLocation:"207 AVUNUE,USA",
      cardImage:"assets/she2.png",
      cardImgDesc:"Franklin J. Schroeder",
      cardImgdesg:"Web Designer"
    },
    {
      cardhead:" USERS TO EVALUATE YOUR PRODUCT",
      cardDesc:"On the other hand we denounce with right eous indignation and dislike men who are so beguiled and success note.",
      cardTime:"10:30",
      cardLocation:"207 AVUNUE,USA",
      cardImage:"assets/she3.png",
      cardImgDesc:"Christopher Manly",
      cardImgdesg:"Programmer"
    },
    {
      cardhead:"BEST PRACTICES FOR MOBILE FORM DESIGN",
      cardDesc:"On the other hand we denounce with right eous indignation and dislike men who are so beguiled and success note.",
      cardTime:"10:30",
      cardLocation:"207 AVUNUE,USA",
      cardImage:"assets/she4.png",
      cardImgDesc:"Katrina S. Burrell",
      cardImgdesg:"CEO & Founder"
    },
    {
      cardhead:"WEB PERFORMANCE FOR THI RD PARTY SCRIPTS",
      cardDesc:"On the other hand we denounce with right eous indignation and dislike men who are so beguiled and success note.",
      cardTime:"10:30",
      cardLocation:"207 AVUNUE,USA",
      cardImage:"assets/she5.png",
      cardImgDesc:"Dominick G. Payne",
      cardImgdesg:"UX/UI Designer"
    },
    {
      cardhead:"WORDPRESS NOTIFICATIONS",
      cardDesc:"On the other hand we denounce with right eous indignation and dislike men who are so beguiled and success note.",
      cardTime:"10:30",
      cardLocation:"207 AVUNUE,USA",
      cardImage:"assets/she6.png",
      cardImgDesc:"Winston C. Deesey",
      cardImgdesg:"Programmer"
    }
  ]


 
viewShedule(){
  return of(this.sheduleList);
}
  viewSpeaker(){
    return of(this.speakerList);
  }

  viewContact(){
    return of (this.contactList);
  }

  viewProducts(){
    return of (this.productsList);
  }
  addproduct(p1:any){
    this.productsList.push(p1);
  }
 
  
  addtocart(p1:any){
    this.cart.push(p1);
  }
  viewcart(){
    return of (this.cart);
  }
  deletecart(product:any){
    this.cart.forEach((ele,ind)=>{
      if(ele.cartName==product.cartName){
        this.cart.splice(ind,1);
      }
    })
  }
  updateproduct(product:any){
    this.productsList.forEach((ele,ind)=>{
      if(ele.cartName==product.cartName){
        this.productsList.splice(ind,1,product)
      }
    }
    )
  }
  
  
  constructor() { }

 
}
