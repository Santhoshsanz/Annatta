import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const apiData = {
  url: 'https://anatta-demo-app.herokuapp.com/api/',
  product: 'products',
  image: 'images'
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getData(url: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(url, { headers });
  }

  getProducts(): Observable<products.Product[]> {
    const url = `${apiData.url}${apiData.product}`;
    return new Observable(observer => {
      this.getData(url).subscribe((response: products.Product[]) => {
        observer.next(response);
        observer.complete();
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }
  getProduct(productId): Observable<products.Product> {
    const url = `${apiData.url}${apiData.product}/${productId}`;
    return new Observable(observer => {
      this.getData(url).subscribe((response: products.Product) => {
        observer.next(response);
        observer.complete();
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }
  getImagesByProduct(productId): Observable<products.ProductImage[]> {
    const url = `${apiData.url}${apiData.product}/${productId}/image`;
    return new Observable(observer => {
      this.getData(url).subscribe((response: products.ProductImage[]) => {
        observer.next(response);
        observer.complete();
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }
  getImage(imageId): Observable<products.ProductImage> {
    const url = `${apiData.url}${apiData.image}/${imageId}`;
    return new Observable(observer => {
      this.getData(url).subscribe((response: products.ProductImage) => {
        observer.next(response);
        observer.complete();
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }
}
