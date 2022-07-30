import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './home/player/player.component';
import { TableComponent } from './players/table/table.component';
import { PointsComponent } from './home/points/points.component';
import { ShopsComponent } from './home/shops/shops.component';
import { SubmitComponent } from './contact/submit/submit.component';
import { HomeComponent } from './home/home/home.component';
//import { PlayersComponent } from './players/players/players.component';
import { SystemstatusComponent } from './shared/systemstatus/systemstatus.component';
import { InfoComponent } from './players/info/info.component';


const routes: Routes = [
  { path: 'home', component:PlayerComponent  },
   {path:'players',component: TableComponent},
   {path:'players/:id', component:InfoComponent},
  // children:[{path:'player/:id', component:InfoComponent}] },
   {path:'contact',component:  SubmitComponent}
 

];

@NgModule({
  declarations: [],
  imports: 
  
    [RouterModule.forRoot(routes)],
  
 
  exports: [RouterModule]
})



export class AppRoutingModule { }


