import { Component, OnInit } from '@angular/core';
import playerData from '../players.json';

interface player{
  _id:string;
  isActive:Boolean;
  points: number;
  picture:string;
  age:number;
  name: string;
  gender:string;
  shop: string;
  email:string;
  phone:string;
  address: string;
}
@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  gettotal(){
    let total=0;
     this.players.forEach(item => {
       total=total+item.points;
      
       
     });
     return total;
   
   }

  constructor() { }

  ngOnInit(): void {
  }
  players:player[]=playerData;
  

  

}
