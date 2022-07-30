import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitComponent } from './submit/submit.component';
//  import { MatFormField } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
// import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
 
    SubmitComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    SharedModule

    
   
  ]
})
export class ContactModule { }
