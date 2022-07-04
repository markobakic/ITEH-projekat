import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: any;
  @Input() cartItemId: number;
  @Output() showNewItems: EventEmitter<any> = new EventEmitter<any>;

  constructor(private _cartService: CartService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public onRemove() {
    this._cartService.deleteCartItem(this.cartItemId).subscribe(result => {
      this._snackBar.open(result as string, 'Close', {
        duration: 1500
      });
      this.showNewItems.emit();
    });
  }

}
