import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgxUIModule } from '@swimlane/ngx-ui';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxUIModule,
    NgxDnDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
