import { Component, OnInit } from '@angular/core';
import {
  HELMET_CAT_HEADING,
  HELMET_CAT_ID,
} from '../../constants/app.constants';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-helmets',
  templateUrl: './helmets.component.html',
  styleUrls: ['./helmets.component.scss'],
})
export class HelmetsComponent implements OnInit {
  public helmets: any;
  public heading = HELMET_CAT_HEADING;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.allHelmets().subscribe((result) => (this.helmets = result));
  }

  public allHelmets() {
    return this._dataService.getAllProductsFromCategory(HELMET_CAT_ID);
  }
}
