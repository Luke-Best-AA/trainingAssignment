import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  divContents: any;
  responseLength:number = 0;

  modalTitle:string = "";
  modalContent:string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/dynamic-divs.json').subscribe({
      next: res => {
        this.divContents = res;
        this.responseLength = this.divContents.length;
      },
      error: error => {
        console.error('There was an error!', error);
      },
      complete: () => {
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
    });
  }  
  
  divs:DynamicDiv[] = [];
  tenth = false;

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
    this.modalTitle = "Div " + divNo + ": " + divTitle;
    this.modalContent = divContent;
  }

  elements = [1];
  count = 1;

  identify(item: any) {
    return item.title;
  }
}
