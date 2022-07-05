import { Component, OnInit } from '@angular/core';
import { SKI_CAT_HEADING, SKI_CAT_ID } from '../../constants/app.constants';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skis',
  templateUrl: './skis.component.html',
  styleUrls: ['./skis.component.scss'],
})
export class SkisComponent implements OnInit {
  public skis: any;
  public heading = SKI_CAT_HEADING;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.allSkis().subscribe((result) => (this.skis = result));
  }

  public allSkis() {
    return this._dataService.getAllProductsFromCategory(SKI_CAT_ID);
  }
}
