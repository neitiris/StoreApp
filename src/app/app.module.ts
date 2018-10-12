import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './pages/';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApproutingModule } from './approuter.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    HomePageComponent
  ],
  imports: [
    FontAwesomeModule,
    ApproutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ApproutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
