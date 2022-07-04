import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ALL_PRODUCTS_HEADING, SORT } from 'src/app/constants/app.constants';
import { SortService } from 'src/app/services/sort.service';
import { DataService } from '../../services/data.service';
import { SortProductsComponent } from '../sort-products/sort-products.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public allProducts: any;
  public heading = ALL_PRODUCTS_HEADING;

  constructor(private _dataService: DataService,
              private _dialog: MatDialog,
              private _sortService: SortService) { }

  ngOnInit(): void {
    this.getAllProducts().subscribe(result => { 
      this.allProducts = result ;
    });

    this._sortService.events$.forEach(event => this.sortProducts(event));
  }

  public getAllProducts() {
    return this._dataService.getAllProducts();
  }

  public openSortDialog() {
    const dialogConfig = {
      minWidth: 350,
      autoFocus: false
    }

    this._dialog.open(SortProductsComponent, dialogConfig);
  }

  public sortProducts(sortParametar: any) {
    if (sortParametar === SORT.priceAsc) {
      this.allProducts.products = this.allProducts.products.sort((a: any, b: any) => a.price - b.price);
    }
    if (sortParametar === SORT.priceDesc) {
      this.allProducts.products = this.allProducts.products.sort((a: any, b: any) => b.price - a.price);
    }
    if (sortParametar === SORT.nameAsc) {
      this.allProducts.products = this.allProducts.products.sort((a: any, b: any) => a.productName.localeCompare(b.productName));
    }
    if (sortParametar === SORT.nameDesc) {
      this.allProducts.products = this.allProducts.products.sort((a: any, b: any) => b.productName.localeCompare(a.productName));
    }
  }

}
