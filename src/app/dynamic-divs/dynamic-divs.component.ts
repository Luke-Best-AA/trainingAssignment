import { Component, HostListener, OnInit } from '@angular/core';

interface DynamicDiv {
  title: string;
  content: string;
  tenthDiv: boolean;
  number: number;
}

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})

export class DynamicDivsComponent implements OnInit {
  themeColor = 'warn';

  newDivs:boolean = false

  noToLoad:number = 10;
  rows:number = 0;
  lastAccessed:number = 0;
  scrollHeight:number = 0;
  clientHeight:number = 0;

  divContents = [
    {title: 'First Div', content: 'This is the first div'},
    {title: 'Loaded from Array', content: 'These divs are loaded from an array to simulate loading a response from an API'},
    {title: '10 Divs', content: 'The array is 10 items long and on each load 10 divs are created'},
    {title: 'Fill the gap', content: 'This is a div here to fill the gap'},
    {title: 'Div 5', content: 'Content 5'},
    {title: 'Div 6', content: 'Content 6'},
    {title: 'Div 7', content: 'Content 7'},
    {title: 'Div 8', content: 'Content 8'},
    {title: 'Div 9', content: 'Content 9'},
    {title: 'Tenth Div', content: 'This Div is a multiple of 10 so will have a button to click'},
  ];

  responseLength = this.divContents.length;
  
  divs:DynamicDiv[] = [];
  tenth = false;
  
  ngOnInit(): void {
    var wrapper = document.getElementById('wrapper');
    var width = wrapper!.offsetWidth;
    var height = wrapper!.offsetHeight;
    this.noToLoad = Math.floor(width/240);

    this.scrollHeight = wrapper!.scrollHeight;
    this.clientHeight = wrapper!.clientHeight;

    this.createDivs();

    this.rows = Math.floor(height/240);    

    for (let i = 0; i < this.rows; i++) {
      this.createDivs();
      this.scrollHeight = wrapper!.scrollHeight;
      this.clientHeight = wrapper!.clientHeight;
    }
  }

  tenthDiv = false;

  createDivs() {
    let noofDivs:number = this.divs.length + 1;    
    for (let i = 0; i < this.noToLoad; i++) {
      if (noofDivs % 10 == 0) {
        this.tenth = true; 
      }
      
      this.divs.push({"number": noofDivs, "title": this.divContents[this.lastAccessed].title, content: this.divContents[this.lastAccessed].content, tenthDiv: this.tenth});
    
      this.tenth = false;
      noofDivs++;
      this.lastAccessed++;
      if (this.lastAccessed == this.responseLength) {
        this.lastAccessed = 0;
      }
    }
  }    

  addDivs() {  
    this.newDivs = true;
    setTimeout(() => {

      this.createDivs()

      this.newDivs = false;
    }, 1000);

  }

  tenthClick(divTitle:string, divContent:string, divNo:number) {
    let modalHeading = document.getElementById("tenthModalLabel");
    let modalContent = document.getElementById("tenthModalContent");

    modalHeading!.innerHTML = "Div " + divNo + ": " + divTitle;
    modalContent!.innerHTML = divContent;
  }

  elements = [1];
  count = 1;

  identify(item: any) {
    return item.title;
  }
}
