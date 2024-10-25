import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  isDivVisible:boolean=true;
  products:any[]=[
    {
name:"Ball Pen",
description:"excellent",
price:25
  },
  {
    name:"Ink Pen",
    image:"./assets/images/2.jpg",
    description:"excellent writing",
    price:50
      },
      {
        name:"Pencil",
        description:"Graphite lead",
        price:25
          },
          {
            name:"sdfsdf",
            description:"dfd lead",
            price:2500
              }
]

  removeCard(){
this.isDivVisible =false;
  }

  addCard(){
    this.isDivVisible =true;
      }
      
  toggleCard(){

    this.isDivVisible = !this.isDivVisible;

    // if(this.isDivVisible == true){
    //   this.isDivVisible =false
    // }else{
    //   this.isDivVisible =true
    // }
      
  }

}
