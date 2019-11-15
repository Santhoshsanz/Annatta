import { Component } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bread = require('./../assets/images/bread.svg');
  title = 'annatta';
}
