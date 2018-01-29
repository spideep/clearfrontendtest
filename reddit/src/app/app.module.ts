import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NredditComponent } from './nreddit/nreddit.component';


@NgModule({
  declarations: [
    AppComponent,
    NredditComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
