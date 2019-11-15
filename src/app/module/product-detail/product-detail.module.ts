import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    Ng2CarouselamosModule
  ]
})
export class ProductDetailModule { }
