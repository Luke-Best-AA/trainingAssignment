import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeContentComponent } from './home-content/home-content.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    HomeContentComponent,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
