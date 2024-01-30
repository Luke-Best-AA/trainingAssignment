import { Component, OnInit } from '@angular/core';
import { Options} from '../enums/grid-options';
import { HttpClient } from '@angular/common/http';

/**
 * `EcommercePageComponent` is a component that provides a ecommerce page functionality.
*/
@Component({
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.scss']
})

export class EcommercePageComponent implements OnInit {
  /** Sets up HttpClient */
  constructor(private http: HttpClient) { }

  /** The options for the grid */
  options = [
    { value: Options.Grid, label: 'Grid' },
    { value: Options.List, label: 'List' }
  ];
  
  /** The items to be displayed */
  items:any;  

  /** The number of columns */
  noofCols:number = Options.Grid;  

  /**
   * Gets the items from the json file weh the component is initialized.
   */
  ngOnInit() {
    this.http.get('assets/e-commerce-data.json').subscribe({
      next: res => {
        this.items = res;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });    
  }

  /** When the bottom of the wrapper is reached */
  bottom() {
    alert("bottom reached");
  }
}