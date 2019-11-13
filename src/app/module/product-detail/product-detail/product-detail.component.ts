import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: products.Product[];
  product: products.Product;
  images: products.ProductImage[];
  image: products.ProductImage;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((products: products.Product[]) => {
      this.products = products;
      this.getProduct(this.products[0].id);
    });
  }
  getProduct(productId) {
    this.productService.getProduct(productId).subscribe((products: products.Product) => {
      this.product = products;
      this.getImagesByProduct(this.product.id)
    });
  }
  getImage(imageId) {
    this.productService.getImage(imageId).subscribe((image: products.ProductImage) => {
      this.image = image;
    });
  }
  getImagesByProduct(productId) {
    this.productService.getImagesByProduct(productId).subscribe((image: products.ProductImage[]) => {
      this.images = image;
      this.getImage(this.images[0].id);
    });
  }
}
