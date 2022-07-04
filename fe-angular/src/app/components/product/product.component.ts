import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productId: number;
  @Input() productName: string;
  @Input() price: number;
  @Input() gender: string;
  @Input() size: string;
  @Input() color: string;
  @Input() imageUrl: string;
  @Input() categoryId: number;

  public category: any;

  constructor(
    private _dataService: DataService,
    private _userService: UserService,
    private _cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categoryForProduct().subscribe((result) => (this.category = result));
  }

  get userLoggedIn() {
    return this._userService.getUser();
  }

  public categoryForProduct() {
    return this._dataService.getCategoryForProduct(this.productId);
  }

  public addToCart() {
    this._cartService
      .addProduct(this.productId, this._userService.getUserId())
      .subscribe((result) => {
        this._snackBar.open((result as Array<any>)[0], 'Close', {
          duration: 1500,
        });
      });
  }
}
