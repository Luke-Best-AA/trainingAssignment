import { Component } from '@angular/core';

let itemList:Element[] = [];

for (let i = 1; i <= 40; i++) {
  var item = {"number": i, "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "price": Math.floor(Math.random() * 100) + 1, "image": "https://picsum.photos/200/300?random="};
  itemList.push(item);
}

export interface Element {
  number: number;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-ecommerce-page',
  templateUrl: './ecommerce-page.component.html',
  styleUrls: ['./ecommerce-page.component.scss']
})

export class EcommercePageComponent {
  items = itemList;
  isGrid: boolean = true;
  isList: boolean = false;

  selectedOption: string = "Grid";
  noofCols = 4;

  options = [
    { name: "Grid"},
    { name: "List"}
  ]

  viewChanged() {
    if (this.selectedOption == "Grid") {
      this.noofCols = 4;
      this.isGrid = true;
      this.isList = false;
    }
    else if (this.selectedOption == "List") {
      this.noofCols = 2;
      this.isList = true;
      this.isGrid = false;
    }
  }

  bottom() {
    alert("bottom reached");
  }
}