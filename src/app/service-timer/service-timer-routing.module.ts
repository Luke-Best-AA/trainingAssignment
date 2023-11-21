import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceTimerComponent } from './service-timer.component';

const routes: Routes = [{ path: '', component: ServiceTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTimerRoutingModule { }
