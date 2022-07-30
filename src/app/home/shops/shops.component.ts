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
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  
   getUniqueValues = () => [...new Set(this.players)].length;

  constructor() { }

  ngOnInit(): void {
  }
  players:player[]=playerData;

}
