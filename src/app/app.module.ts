import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgxUIModule } from '@swimlane/ngx-ui';
import { NgxDnDModule } from '@swimlane/ngx-dnd/src/';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxUIModule,
    NgxDnDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
