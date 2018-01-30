import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Page} from '../pagination';

import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  animations: [
    trigger('animation_one', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class PaginationComponent implements OnInit {
  current = 1;

  @Output() changePage = new EventEmitter();

  constructor() {
  }

  pageModel: Page = {
    page: this.current
  };

  ngOnInit() {
  }

  setPage(page: string) {
    this.pageModel.page = +page;
    this.changePage.emit(this.pageModel);
  }

}
