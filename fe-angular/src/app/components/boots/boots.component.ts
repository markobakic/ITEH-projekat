import { Component, OnInit } from '@angular/core';
import { BOOT_CAT_HEADING, BOOT_CAT_ID } from 'src/app/constants/app.constants';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-boots',
  templateUrl: './boots.component.html',
  styleUrls: ['./boots.component.scss'],
})
export class BootsComponent implements OnInit {
  public boots: any;
  public heading = BOOT_CAT_HEADING;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.allBoots().subscribe((result) => (this.boots = result));
  }

  public allBoots() {
    return this._dataService.getAllProductsFromCategory(BOOT_CAT_ID);
  }
}
