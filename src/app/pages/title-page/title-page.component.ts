import { Component, OnInit } from '@angular/core';
import {faList, faSearch, faUserAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  faSearchIcon = faSearch;
  faHumanIcon = faUserAlt;
  faMenuIcon = faList;
  footer_list = [
    {href: '', text: 'Privacy and Cookies'},
    {href: '', text: 'Terms and Conditions'},
    {href: '', text: 'Accessibility'},
    {href: '', text: 'Store Directory'},
    {href: '', text: 'About Us'}
  ];
  lists = [
    [
      {title: 'Costumer Service'},
      {href: '', text: 'Contact'},
      {href: '', text: 'FAQ'},
      {href: '', text: 'Terms of payment'},
      {href: '', text: 'Terms of sale'},
      {href: '', text: 'Delivery terms'},
      {href: '', text: 'Returns and refunds'},
    ],
    [
      {title: 'Costumer Service'},
      {href: '', text: 'Contact'},
      {href: '', text: 'FAQ'},
      {href: '', text: 'Terms of payment'},
      {href: '', text: 'Terms of sale'},
      {href: '', text: 'Delivery terms'},
      {href: '', text: 'Returns and refunds'},
    ],
    [
      {title: 'Costumer Service'},
      {href: '', text: 'Contact'},
      {href: '', text: 'FAQ'},
      {href: '', text: 'Terms of payment'},
      {href: '', text: 'Terms of sale'},
      {href: '', text: 'Delivery terms'},
      {href: '', text: 'Returns and refunds'},
    ],
    [
      {title: 'Costumer Service'},
      {href: '', text: 'Contact'},
      {href: '', text: 'FAQ'},
      {href: '', text: 'Terms of payment'},
      {href: '', text: 'Terms of sale'},
      {href: '', text: 'Delivery terms'},
      {href: '', text: 'Returns and refunds'},
    ]
  ];
  socials = [
    {
      href: '', img: '../../../assets/twitter.png',
      href2: '', img2: '../../../assets/pint.png',
      href3: '', img3: '../../../assets/facebook.png'},
    {
      href: '', img: '../../../assets/g+.png',
      href2: '', img2: '../../../assets/t.png',
      href3: '', img3: '../../../assets/v.png'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
