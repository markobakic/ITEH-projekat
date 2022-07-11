import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss']
})
export class CategoryHeadingComponent implements OnInit {
  @Input() categoryHeading: string;

  constructor() { }

  ngOnInit(): void {
  }

}
