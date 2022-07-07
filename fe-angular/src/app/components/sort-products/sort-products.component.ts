import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.scss']
})
export class SortProductsComponent implements OnInit {
  public sortForm = new FormGroup({
    sort: new FormControl()
  });

  constructor(private _sortService: SortService) { }

  ngOnInit(): void {
    this.sortForm.get('sort')?.valueChanges.subscribe(result => {
      this._sortService.newEvent(result);
    });
    this.sortForm.get('sort')?.setValue(this._sortService.sortValue);
  }

}
