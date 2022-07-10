import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() contact: string;

  constructor() { }

  ngOnInit(): void {
  }

}
