import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommercePageRoutingModule } from './ecommerce-page-routing.module';
import { EcommercePageComponent } from './ecommerce-page.component';

import { MatGridListModule } from '@angular/material/grid-list';
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
  ]
})
export class EcommercePageModule { }
