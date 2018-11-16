import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApproutingModule } from './approuter.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  SliderComponent,
  PriceSliderComponent
} from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TitlePageComponent,
  ProductPageComponent,
  HomePageComponent
} from './pages/';
import {Ng5SliderModule} from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    HomePageComponent,
    SliderComponent,
    ProductPageComponent,
    PriceSliderComponent,
  ],
  imports: [
    FontAwesomeModule,
    ApproutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng5SliderModule
  ],
  providers: [ApproutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
