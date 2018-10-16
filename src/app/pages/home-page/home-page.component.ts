import { Component, OnInit } from '@angular/core';
import {
  faList,
  faPlus,
  faShoppingBag,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faPinterest, faTwitter} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faListIcon = faList;
  faShoppingBagIcon = faShoppingBag;
  faPlusIcon = faPlus;
  faFacebookIcon = faFacebookF;
  faTwitterIcon = faTwitter;
  faPinterestIcon = faPinterest;
  faCaretDownIcon = faCaretDown;
  image_array = [
    '../../../assets/slider-img.png',
    '../../../assets/slider-img.png',
    '../../../assets/slider-img.png',
  ];
  constructor() { }

  ngOnInit() {
  }

}
