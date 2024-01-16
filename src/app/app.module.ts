import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeContentModule } from './home-content/home-content.module';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FloatingBannerComponent,
    TimerDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeContentModule,
    SpinnerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
