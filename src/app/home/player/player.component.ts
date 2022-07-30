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
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 players:player[]=playerData;
}
