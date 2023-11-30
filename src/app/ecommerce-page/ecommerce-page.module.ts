import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommercePageRoutingModule } from './ecommerce-page-routing.module';
import { EcommercePageComponent } from './ecommerce-page.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EcommercePageComponent
  ],
  imports: [
    CommonModule,
    EcommercePageRoutingModule,
    MatGridListModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EcommercePageModule { }
