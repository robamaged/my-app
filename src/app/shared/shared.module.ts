import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemstatusComponent } from './systemstatus/systemstatus.component';
import { MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    SystemstatusComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
  ,
  exports:[SystemstatusComponent]
})
export class SharedModule { }
