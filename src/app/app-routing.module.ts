import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'floatingBanner',
    loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule)
  },
  {
    path: 'ecommercePage',
    loadChildren: () => import('./ecommerce-page/ecommerce-page.module').then(m => m.EcommercePageModule)
  },
  {
    path: 'countdownTimer',
  loadChildren: () => import('./countdown-timer/countdown-timer.module').then(m => m.CountdownTimerModule)
  },
  {
    path: 'studentMarks',
    loadChildren: () => import('./student-marks/student-marks.module').then(m => m.StudentMarksModule)
  },
  {
    path: 'dynamicDivs',
    loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)
  },
  {
    path: 'serviceTimer',
    loadChildren: () => import('./service-timer/service-timer.module').then(m => m.ServiceTimerModule)
  },
  { 
    path: 'home',
    loadChildren: () => import('./home-content/home-content.module').then(m => m.HomeContentModule)
  },  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(
  routes,
  {
    // preloadingStrategy: PreloadAllModules
  }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
