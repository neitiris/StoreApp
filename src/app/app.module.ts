import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitlePageComponent } from './pages/';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApproutingModule } from './approuter.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './pages';
import { SliderComponent } from './components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    HomePageComponent,
    SliderComponent,
    ProductPageComponent
  ],
  imports: [
    FontAwesomeModule,
    ApproutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ApproutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
