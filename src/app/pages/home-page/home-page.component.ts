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
  positions = [
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
  ];
  filters = [
    { sort: 'all', name: 'WHAT`S HOT?', checked: true },
    { sort: 'recent', name: 'DESIGNERS', checked: false },
    { sort: 'popular', name: 'FEATURED', checked: false },
    { sort: 'price', name: 'LATEST', checked: false }
  ];
  buttons = [
    { sort: 'back', name: '<', checked: false },
    { sort: 'forward', name: '>', checked: true }
];
  constructor() { }

  ngOnInit() {
  }

}
