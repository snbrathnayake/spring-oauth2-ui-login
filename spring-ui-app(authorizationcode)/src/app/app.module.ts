import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationService } from './services/application.service';
import { HomeComponent } from './home/home.component';
import { ViewInforComponent } from './view-infor/view-infor.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewInforComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }], { onSameUrlNavigation: 'reload' })
  ],
  providers: [
    // AuthService,
    ApplicationService,
    // CookieService,
   // { provide: CookieOptionsProvider, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
