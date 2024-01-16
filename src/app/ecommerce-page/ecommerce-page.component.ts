import { Component, OnInit } from '@angular/core';
import { Options} from '../enums/grid-options';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.scss']
})

export class EcommercePageComponent implements OnInit {
  constructor(private http: HttpClient) { }
  options = [
    { value: Options.Grid, label: 'Grid' },
    { value: Options.List, label: 'List' }
  ];  
  items:any;  

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

  noofCols:number = Options.Grid;

  bottom() {
    alert("bottom reached");
  }
}