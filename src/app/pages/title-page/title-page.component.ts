import { Component, OnInit } from '@angular/core';
import {faSearch, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  faSearchIcon = faSearch;
  faHumanIcon = faUserAlt

  constructor() { }

  ngOnInit() {
  }

}
