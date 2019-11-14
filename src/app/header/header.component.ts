import { Component, OnInit } from '@angular/core';
declare const require: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = require('./../../assets/images/logo-svg.svg');
  bag = require('./../../assets/images/bag-svg.svg');
  user = require('./../../assets/images/user-svg.svg');
  hamburger = require('./../../assets/images/hamburger.svg');
  constructor() { }

  ngOnInit() {
  }

}
