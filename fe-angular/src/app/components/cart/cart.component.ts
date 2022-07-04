import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PAYMENT } from 'src/app/constants/app.constants';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: any;
  public paymentMethod = PAYMENT;
  public paymentForm: FormGroup;

  constructor(private _cartService: CartService,
              private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.paymentForm = this._formBuilder.group({
      method: ['', Validators.required]
    });

    this.getCartItems();
  }

  get totalPrice(): number {
    return this.cartItems ? this.cartItems.reduce((partialSum: number, a: any) => partialSum + a.product.price, 0) : 0;
  }

  get validForm() {
    return this.paymentForm.valid;
  }

  public getCartItems() {
    this._cartService.getCartItems(this._userService.getUserId()).subscribe(
      result => {
        this.cartItems = Array.isArray(result) ? result : 
          Object.keys(result).map(key => (result as any)[key]);
      },
      error => {
        this.cartItems = null;
      }
    );
  }

  public onCheckout() {
    this.cartItems.forEach((item: any) => {
      this._cartService.deleteCartItem(item.id).subscribe(
        result => {
          this.getCartItems();
        }
      );
    });
  }

}
