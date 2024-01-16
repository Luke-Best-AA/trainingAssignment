import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivsRoutingModule } from './dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { DetectBottomDirective } from '../shared/directives/detect-bottom.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    DynamicDivsRoutingModule,
    InfiniteScrollModule,
    SpinnerComponent,
    DetectBottomDirective,
    HttpClientModule 
  ]
})
export class DynamicDivsModule { }
