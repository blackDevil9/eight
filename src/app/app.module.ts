import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { GridComponent } from './grid/grid.component';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxGridModule,
    jqxListBoxModule,
    jqxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
