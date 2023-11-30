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
  
  divs:DynamicDiv[] = [];
  tenth = false;
  
  ngOnInit(): void {
    this.addDivs();
  }

  tenthDiv = false;

  addDivs() {
    let noofDivs:number = this.divs.length + 1;

    for (let element of this.divContents) {

      if (noofDivs % 10 == 0) {
        this.tenth = true; 
      }
      
      this.divs.push({"number": noofDivs, "title": element.title, content: element.content, tenthDiv: this.tenth});
    
      this.tenth = false;
      noofDivs++;
    }

  }

  alertDiv(divNo:number) {
    alert("Button " + divNo + " clicked");
  }

  elements = [1];
  count = 1;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      //setTimeout(this.addDivs(),1000);
      this.addDivs();
    }
  }

  bottomReached(): boolean {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    return scrollTop + clientHeight >= scrollHeight;
  }

}
