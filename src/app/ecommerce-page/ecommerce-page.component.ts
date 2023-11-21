import { Component } from '@angular/core';

let itemList: number[] = [];

for (let i = 1; i <= 40; i++) {
  itemList.push(i);
}

@Component({
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.css']
})

export class EcommercePageComponent {
  items = itemList;

  selectedOption: string = "Grid";
  noofCols = 4;

  options = [
    { name: "Grid"},
    { name: "List"}
  ]

  viewChanged() {
    if (this.selectedOption == "Grid") {
      this.noofCols = 4;
    }
    else if (this.selectedOption == "List") {
      this.noofCols = 2;
    }
  }
}