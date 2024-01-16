import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommercePageRoutingModule } from './ecommerce-page-routing.module';
import { EcommercePageComponent } from './ecommerce-page.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DetectBottomDirective } from '../shared/directives/detect-bottom.directive';
import { HttpClientModule } from '@angular/common/http';


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
    MatInputModule,
    DetectBottomDirective,
    HttpClientModule
  ]
})
export class EcommercePageModule { }
