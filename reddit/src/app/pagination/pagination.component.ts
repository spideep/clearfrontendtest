import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Page} from '../pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() current: number;
  @Input() postsPerPage: number[];
  @Input() itemsPerPage: number;

  @Output() changePage = new EventEmitter();

  constructor() {
  }

  pages: any[] = [];
  pageModel: Page = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };

  ngOnInit() {
  }

  setPage(page: number, perPage: number) {
    this.pageModel.page = page;
    this.pageModel.itemsPerPage = perPage;
    this.changePage.emit(this.pageModel);
  }

}
