import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { generatedata } from 'src/assets/generatedata';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;


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
  
  excelBtnOnClick() {
    this.myGrid.exportdata('xls', 'jqxGrid');
  };

  xmlBtnOnClick() {
    this.myGrid.exportdata('xml', 'jqxGrid');
  };

  csvBtnOnClick() {
    this.myGrid.exportdata('csv', 'jqxGrid');
  };

  tsvBtnOnClick() {
    this.myGrid.exportdata('tsv', 'jqxGrid');
  };

  htmlBtnOnClick() {
    this.myGrid.exportdata('html', 'jqxGrid');
  };

  jsonBtnOnClick() {
    this.myGrid.exportdata('json', 'jqxGrid');
  };

  pdfBtnOnClick() {
    this.myGrid.exportdata('pdf', 'jqxGrid');
  };

  constructor() { }

  ngOnInit() {
  }

}
