import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from 'src/app/module/product-detail/product-detail/product-detail.component';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./module/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  // component: ProductDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
