import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent {
  @Output() getMin = new EventEmitter <number>();
  @Output() getMax = new EventEmitter <number>();
  minValue = 0;
  maxValue = 200;
  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 1
  };
  onGetRange(minVal, maxVal) {
    console.log('price-slider', minVal, maxVal);
    this.getMin.emit(minVal);
    this.getMax.emit(maxVal);
  }
}
