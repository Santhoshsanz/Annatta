import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
declare const require: any;
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
  fullStar: string = require('./../../../../assets/images/Star-full.svg');
  star: string = require('./../../../../assets/images/star.svg');
  strip = require('./../../../../assets/images/features.svg');
  stripSmall = require('./../../../../assets/images/features.svg');
  arrowRight = require('./../../../../assets/images/arrow-right.png');
  arrowLeft = require('./../../../../assets/images/arrow-left.png');
  stars = [0, 1, 2, 3, 4];
  men: boolean = true;
  colorPallete: string[] = ['#F7F7F7', '#072348', '#BB0D0F', '#FFCF60', '#4E4E4E', '#129F7D', '#C69F97', '#000000', '#215297', '#B3926E'];

  listOfItems: any = [{ name: 'White Canvas', price: '79', desc: 'Los Angeles Favourite', url: './../../../../assets/images/canvas.png' },
  { name: 'Black Canvas', price: '79', desc: '', url: './../../../../assets/images/canvas1.png' },
  { name: 'Grey Suede', price: '98', desc: 'Sold Out', url: './../../../../assets/images/canvas.png' },
  { name: 'White Canvas', price: '79', desc: '', url: './../../../../assets/images/canvas.png' },
  { name: 'White Canvas', price: '79', desc: 'Los Angeles Favourite', url: './../../../../assets/images/canvas.png' },
  { name: 'Black Canvas', price: '79', desc: '', url: './../../../../assets/images/canvas1.png' },
  { name: 'Grey Suede', price: '98', desc: 'Sold Out', url: './../../../../assets/images/canvas.png' },
  { name: 'White Canvas', price: '79', desc: '', url: './../../../../assets/images/canvas.png' }
  ];
  sizeList = [{
    size: 5,
    disabled: true
  },
  {
    size: 5.5,
    disabled: false
  },
  {
    size: 6,
    disabled: true
  },
  {
    size: 6.5,
    disabled: false
  },
  {
    size: 7,
    disabled: true
  },
  {
    size: 7.5,
    disabled: false
  },
  {
    size: 8,
    disabled: true
  },
  {
    size: 8.5,
    disabled: true
  },
  {
    size: 9,
    disabled: true
  },
  {
    size: 9.5,
    disabled: false
  },
  {
    size: 10,
    disabled: true
  },
  {
    size: 10.5,
    disabled: true
  },
  {
    size: 11,
    disabled: true
  },
  {
    size: 11.5,
    disabled: true
  },
  {
    size: 12,
    disabled: true
  },
  {
    size: 12.5,
    disabled: true
  },
  {
    size: 13,
    disabled: true
  }];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((products: products.Product[]) => {
      this.products = products;
      this.getProduct(this.products[3].id);
    });
  }
  getProduct(productId) {
    this.productService.getProduct(productId).subscribe((products: products.Product) => {
      this.product = products;
      this.getImagesByProduct(this.product.id);
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
  getImagebyProductId(image: products.ProductImage) {
    this.productService.getImagebyProductIdImageId(image.productId, image.id).subscribe((img: products.ProductImage) => {
      this.image = img;
    });
  }
  toggleSizeChart() {
    this.men = !this.men;
  }
}
