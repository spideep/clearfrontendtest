import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {JsonpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {NredditComponent} from './nreddit/nreddit.component';
import {PaginationComponent} from './pagination/pagination.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgoDateCustomPipe} from './agoDateCustomPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NredditComponent,
    PaginationComponent,
    AgoDateCustomPipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
