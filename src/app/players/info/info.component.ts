import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
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

const ELEMENT_DATA: PeriodicElement[] =[]

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})





export class InfoComponent implements OnInit {
  @Input() public parentData=[];


  displayedColumns: string[] = [  'name', 'email', 'age' ,'points']
  
  dataSource = new  MatTableDataSource  (ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
