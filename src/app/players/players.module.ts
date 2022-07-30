import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { MatFormField } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { SystemstatusComponent } from '../shared/systemstatus/systemstatus.component';
// import { PlayersComponent } from './players/players.component';
import { InfoComponent } from './info/info.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule, Routes } from '@angular/router';






@NgModule({
  declarations: [
    TableComponent,
    DataTableComponent,
    MatFormField,
    MatInput,
    SystemstatusComponent,
    // PlayersComponent,
    InfoComponent,
  
  ],
  imports: [
    CommonModule,
    // SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule

    
    
  ]
  
})
export class PlayersModule { }
