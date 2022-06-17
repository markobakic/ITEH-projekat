import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fe-angular';

  @HostBinding('class') className = '';

  ngOnInit() {
  }

  public toggleChanged(checked: boolean) {
    this.className = checked ? 'dark-mode' : '';
  }
}
