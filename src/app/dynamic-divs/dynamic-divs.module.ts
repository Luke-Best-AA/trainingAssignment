import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivsRoutingModule } from './dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerComponent } from '../spinner/spinner.component';
import { DetectBottomDirective } from '../detect-bottom.directive';

@NgModule({
  declarations: [
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    DynamicDivsRoutingModule,
    InfiniteScrollModule,
    SpinnerComponent,
    DetectBottomDirective    
  ]
})
export class DynamicDivsModule { }
