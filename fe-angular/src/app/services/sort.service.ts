import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private _subject = new Subject<any>();
  private _sortValue = null;

  constructor() { }

  public newEvent(event: any) {
    this._subject.next(event);
    this._sortValue = event;
  }

  get events$() {
    return this._subject.asObservable();
  }

  get sortValue() {
    return this._sortValue;
  }
}
