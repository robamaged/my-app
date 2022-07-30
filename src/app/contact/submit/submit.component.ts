import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
 email:any;
name:any ;
message:any ;
  constructor() { }

  ngOnInit(): void {
  }

  usersubmit(){
     alert("Email:"+ this.email +" " + "Name:"+this.name +""+  "Message:"+ this.message)
   
  }

}
