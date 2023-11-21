import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownTimerComponent } from './countdown-timer.component';

const routes: Routes = [{ path: '', component: CountdownTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownTimerRoutingModule { }
