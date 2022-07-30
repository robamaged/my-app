import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { core } from '@angular/compiler';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './players/table/table.component';
import { DataSource } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
 import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubmitComponent } from './contact/submit/submit.component';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from './shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InfoComponent } from './players/info/info.component';








@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InfoComponent
    // PlayersComponent,
    
   

   
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
     MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    ContactModule,
    SharedModule,
    HomeModule,
    MatCheckboxModule
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
