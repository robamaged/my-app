import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-systemstatus',
  templateUrl: './systemstatus.component.html',
  styleUrls: ['./systemstatus.component.css']
})
export class SystemstatusComponent implements OnInit {
  systemstatus=true;

  constructor() { }

  ngOnInit(): void {
  }

}
