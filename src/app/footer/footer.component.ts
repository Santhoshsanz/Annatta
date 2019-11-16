import { Component, OnInit } from '@angular/core';
declare const require: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  strip = require('./../../assets/images/features.svg');
  stripSmall = require('./../../assets/images/features.svg');
  footerListMen = ['OCA Low', 'OCA High', 'CATIBA Low', 'CATIBA high'];
  support = ['FAQ', 'Returns', 'Live Chat'];
  about = ['Mission', 'Vision', 'Future'];
  stores = ['Find Near You', 'Register'];
  fb = require('./../../assets/images/facebook-logo.svg');
  insta = require('./../../assets/images/instagram.svg');
  search = require('./../../assets/images/search.svg');
  constructor() { }

  ngOnInit() {
  }

}
