import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public baseUrl = BASE_URL;
  public cart: any;

  constructor(private _http: HttpClient) { }

  public addProduct(prodId: number, usId: number) {
    return this._http.post(`${this.baseUrl}/carts`, { productId: prodId, userId: usId });
  }

  public getCartItems(usId: number) {
    return this._http.get(`${this.baseUrl}/users/${usId}/cart`);
  }

  public deleteCartItem(id: number) {
    return this._http.delete(`${this.baseUrl}/carts/${id}`);
  }
}
