import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Page} from '../pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
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
