import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent {
  minValue = 0;
  maxValue = 200;
  options: Options = {
    floor: 0,
    ceil: 5000,
    step: 1
  };
}
