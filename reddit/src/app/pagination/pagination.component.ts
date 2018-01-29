import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Page} from '../pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  current: number = 1;

  @Output() changePage = new EventEmitter();

  constructor() {
  }

  pages: any[] = [];
  pageModel: Page = {
    page: this.current
  };

  ngOnInit() {
  }

  setPage(page: number) {
    this.pageModel.page = page;
    this.changePage.emit(this.pageModel);
  }

}
