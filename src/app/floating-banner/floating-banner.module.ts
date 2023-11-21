import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingBannerRoutingModule } from './floating-banner-routing.module';
import { FloatingBannerComponent } from './floating-banner.component';


@NgModule({
  declarations: [
    FloatingBannerComponent
  ],
  imports: [
    CommonModule,
    FloatingBannerRoutingModule
  ]
})
export class FloatingBannerModule { }
