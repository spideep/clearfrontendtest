import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NredditComponent } from './nreddit/nreddit.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NredditComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
