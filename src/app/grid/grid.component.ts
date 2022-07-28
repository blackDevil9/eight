import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

import { generatedata } from 'src/assets/generatedata';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
  @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;
  @ViewChild('eventsLog', { static: false }) eventsLog: ElementRef;
  @ViewChild('pagingInfo', { static: false }) pagingInfo: ElementRef;


  source: any =
    {
      localdata: generatedata(100, false),
      datatype: 'array',
      datafields:
        [
          { name: 'firstname', type: 'string' },
          { name: 'lastname', type: 'string' },
          { name: 'productname', type: 'string' },
          { name: 'available', type: 'bool' },
          { name: 'date', type: 'date' },
          { name: 'quantity', type: 'number' },
          { name: 'price', type: 'number' }
        ]
    };
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] =
    [
      { text: 'First Name', datafield: 'firstname', width: 130 },
      { text: 'Last Name', datafield: 'lastname', width: 130 },
      { text: 'Product', datafield: 'productname', width: 200 },
      { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
      { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
      { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
      { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
    ];
  listBoxSource: any[] =
    [
      { label: 'First Name', value: 'firstname', checked: true},
      { label: 'Last Name', value: 'lastname', checked: true },
      { label: 'Product', value: 'productname', checked: true },
      { label: 'Available', value: 'available', checked: true },
      { label: 'Ship Date', value: 'date', checked: true },
      { label: 'Quantity', value: 'quantity', checked: true },
      { label: 'Price', value: 'price', checked: true }
    ];
  
  myListBoxOnCheckChange(event: any): void {
    this.myGrid.beginupdate();
    if (event.args.checked) {
      this.myGrid.showcolumn(event.args.value);
    }
    else {
      this.myGrid.hidecolumn(event.args.value);
    }
    this.myGrid.endupdate();
  };

  onPageChanged(event: any): void {
    this.eventsLog.nativeElement.style.display = 'block';
    let loggedElements = document.getElementsByClassName('logged');
    if (loggedElements.length >= 5) {
      this.myPanel.clearcontent();
    }
    let args = event.args;
    let eventData = 'pagechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + '</div>';
    this.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
    // get page information.
    let paginginformation = this.myGrid.getpaginginformation();
    this.pagingInfo.nativeElement.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
  }
  onPageSizeChanged(event: any): void {
    this.eventsLog.nativeElement.style.display = 'block';
    this.myPanel.clearcontent();
    let args = event.args;
    let eventData = 'pagesizechanged <div>Page:' + args.pagenum + ', Page Size: ' + args.pagesize + ', Old Page Size: ' + args.oldpagesize + '</div>';
    this.myPanel.prepend('<div style="margin-top: 5px">' + eventData + '</div>');
    // get page information.
    let paginginformation = this.myGrid.getpaginginformation();
    this.pagingInfo.nativeElement.innerHTML = '<div style="margin-top: 5px;">Page:' + paginginformation.pagenum + ', Page Size: ' + paginginformation.pagesize + ', Pages Count: ' + paginginformation.pagescount + '</div>';
  }
  
  excelBtnOnClick() {
    this.myGrid.exportdata('xls', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  xmlBtnOnClick() {
    this.myGrid.exportdata('xml', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  csvBtnOnClick() {
    this.myGrid.exportdata('csv', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  tsvBtnOnClick() {
    this.myGrid.exportdata('tsv', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  htmlBtnOnClick() {
    this.myGrid.exportdata('html', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  jsonBtnOnClick() {
    this.myGrid.exportdata('json', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  pdfBtnOnClick() {
    this.myGrid.exportdata('pdf', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
  };

  constructor() { }

  ngOnInit() {
  }

}
