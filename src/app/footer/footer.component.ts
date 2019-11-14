import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerListMen = ['OCA Low', 'OCA High', 'CATIBA Low', 'CATIBA high'];
  support = ['FAQ', 'Returns', 'Live Chat'];
  about = ['Mission', 'Vision', 'Future'];
  stores = ['Find Near You', 'Register'];
  constructor() { }

  ngOnInit() {
  }

}
