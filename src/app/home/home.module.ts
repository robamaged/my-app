import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsComponent } from './points/points.component';
import { ShopsComponent } from './shops/shops.component';
import {MatCardModule} from '@angular/material/card';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from '../shared/shared.module';
import { SystemstatusComponent } from '../shared/systemstatus/systemstatus.component';




@NgModule({
  declarations: [
    PointsComponent,
    ShopsComponent,
    PlayerComponent,
   
    

  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    
    
  ]
  ,exports:[PointsComponent,ShopsComponent,PlayerComponent]
})
export class HomeModule { }
