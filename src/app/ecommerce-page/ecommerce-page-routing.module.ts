import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommercePageComponent } from './ecommerce-page.component';

const routes: Routes = [{ path: '', component: EcommercePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommercePageRoutingModule { }
