import { Component, OnInit } from '@angular/core';
import {faHome, faPlus, faSquareFull} from '@fortawesome/free-solid-svg-icons';
import {SIZE_LIST, FEATURED_DRESSES, LIST_DRESSES, SALE_DRESSES} from '../../../Shared/mock-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  home_icon = faHome;
  faPlusIcon = faPlus;
  squareFullIcon = faSquareFull;
  sizeList = SIZE_LIST;
  sale_dresses = SALE_DRESSES;
  featured_dresses = FEATURED_DRESSES;
  list_dress = LIST_DRESSES;
  dressFiltered = [];
  dressFilteredNSorted = [];
  dressFilteredNSortedNPriced = [];
  filterOption = 'S';
  sortOption = 'date';
  dress = LIST_DRESSES;
  minPriceRange: number;
  maxPriceRange: number;
  linkList = [
    {href: '', name: 'Women'},
    {href: '', name: 'Clothes'},
  ];
  positions = [
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
    {img: '../../../assets/girl1.png', name: 'MIMOSA DRESS', cost: '73.74$'},
  ];
  public menuItems: any[] = [

    {header: 'NEW', button: ['Button1', 'Button2', 'Button3', 'Button4']},
    {header: 'DESIGNERS', button: ['Button1', 'Button2', 'Button3']},
    {header: 'WOMEN', button: ['Button1']},
    {header: 'MEN', button: ['Button1', 'Button2']},
    {header: 'CLEARANCE', button: ['Button1', 'Button2', 'Button3', 'Button4', 'Button5', 'Button6', 'Button7']},
];
  constructor() { }

  ngOnInit() {
    this.populateMenu();
    this.filterDressBy(this.filterOption);
  }
  private populateMenu() {
    if (this.menuItems.length) {
      const allItems: any[] = [];
      for (let m = 0; m < this.menuItems.length; m++) {
        console.log();
        const item: any = {
          id: m,
          opened: false,
          title: this.menuItems[m].header,
          innerItems: []
        };
        if (this.menuItems[m] && this.menuItems[m].button) {
          for (let c = 0; c < this.menuItems[m].button.length; c++) {
            item.innerItems.push({
              id: 1000 * m + c,
              title: this.menuItems[m].button[c]
            });
          }
          allItems.push(item);
        }
      }
      this.menuItems = allItems;
    }
  }
  public menuClicked(item: any) {
    // If menu items exist, we continue our logic
    if (this.menuItems.length) {
      // Iterate through menu items
      // Compare clicked menu item 'id' and change it's 'opened' property to reverse boolean value
      // All other menu items 'opened' set to false. Closing any menu item opened.
      this.menuItems.forEach((m: any) => item.id === m.id ? m.opened = !m.opened :  m.opened = false);
    }
  }
  public filterDressBy(param: string) {
    if (param) {
      this.filterOption = param;
      switch (param) {
        case 'XS':
          this.dressFiltered = _.filter(this.dress, (d) => d.size === 'xs');
          break;
        case 'S':
          this.dressFiltered = _.filter(this.dress, (d) => d.size === 's');
          break;
        case 'M':
          this.dressFiltered = _.filter(this.dress, (d) => d.size === 'm');
          break;
        case 'L':
          this.dressFiltered = _.filter(this.dress, (d) => d.size === 'l');
          break;
        case 'XL':
          this.dressFiltered = _.filter(this.dress, (d) => d.size === 'xl');
          break;
      }
      this.sortDressBy(this.sortOption);
    }
  }
  public sortDressBy (sort?: string) {
    if (sort) {
      this.sortOption = sort;
      console.log(sort);
      switch (sort) {
        case 'date':
          this.dressFilteredNSorted = _.orderBy(this.dressFiltered, ['createdAt']);
          break;
        case 'price':
          console.log(this.dressFilteredNSorted);
          this.dressFilteredNSorted = _.sortBy(this.dressFiltered, (d) => d.price);
          console.log(this.dressFilteredNSorted);
          break;
      }
    }
    this.getRange(this.minPriceRange, this.maxPriceRange);
  }
  public getMinRange(minRange) {
    this.minPriceRange = minRange;
  }
  public getMaxRange(maxRange) {
    this.maxPriceRange = maxRange;
    this.getRange(this.minPriceRange, this.maxPriceRange );
  }
  public getRange(minPrice, maxPrice) {
    if ( this.maxPriceRange) {
      this.dressFilteredNSortedNPriced = _.filter(this.dressFilteredNSorted, (d) => minPrice < d.price && d.price < maxPrice);
      console.log('minPrice', minPrice, 'maxPrice', maxPrice );
    }
  }
}

