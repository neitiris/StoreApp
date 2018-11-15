import { Component, OnInit } from '@angular/core';
import {faHome, faPlus, faSquareFull} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  home_icon = faHome;
  faPlusIcon = faPlus;
  squareFullIcon = faSquareFull;
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
}
