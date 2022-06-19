import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  public handleToggleChange(event: MatSlideToggleChange) {
    this.toggleChange.emit(event.checked);
  }
}
