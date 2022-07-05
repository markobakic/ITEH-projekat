import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public baseUrl = BASE_URL;

  constructor(private _http: HttpClient) {}

  public getAllProducts() {
    return this._http.get(`${this.baseUrl}/products`);
  }

  public getCategoryForProduct(productId: number) {
    return this._http.get(`${this.baseUrl}/product/${productId}/category`);
  }

  public getAllProductsFromCategory(categoryId: number) {
    return this._http.get(`${this.baseUrl}/category/${categoryId}/products`);
  }
}
