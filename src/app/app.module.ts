import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApproutingModule } from './approuter.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  TitlePageComponent,
  ProductPageComponent,
  HomePageComponent
} from './pages/';

@NgModule({
  declarations: [
    AppComponent,
    TitlePageComponent,
    HomePageComponent,
    SliderComponent,
    ProductPageComponent,
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
