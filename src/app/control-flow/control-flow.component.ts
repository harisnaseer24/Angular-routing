import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
 
  badgeMsg:string= "";
  name:string="";
  badgeType:string="number";



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

// changeBadgeValue(e:Event){
// this.badgeMsg= e.v
// }
}
