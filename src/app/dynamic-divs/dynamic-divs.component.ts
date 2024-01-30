import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Interface for DynamicDiv
 */
interface DynamicDiv {
  /** The title of the Div */
  title: string;
  /** The content of the Div */
  content: string;
  /** Indicates whether the Div is a tenth Div */
  tenthDiv: boolean;
  /** The number of the Div */
  number: number;
}

/**
 * `DynamicDivsComponent` is a component that provides a dynamic divs functionality.
*/

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})

export class DynamicDivsComponent implements OnInit {
  /** Indicates whether new Divs are being loaded. */
  newDivs:boolean = false
  /** The number of Divs to Load */
  noToLoad:number = 10;
  /** The number of rows the Divs will occupy */
  rows:number = 0;
  /** The last accessed Div so that on the next load te next Div is correctly loaded */
  lastAccessed:number = 0;
  /** The scroll height of the wrapper */
  scrollHeight:number = 0;
  /** The client height of the wrapper */
  clientHeight:number = 0;
    
  /** The Divs to be loaded */
  divContents: any;
  /** The number of Divs in the response */
  responseLength:number = 0;

  /** The title of the modal */
  modalTitle:string = "";
  /** The content of the modal */
  modalContent:string = "";

  /** The Divs to be displayed */
  divs:DynamicDiv[] = [];
  /** Indicates whether the Div is a tenth Div */
  tenth = false;

  /** Sets up HttpClient */
  constructor(private http: HttpClient) { }

  /**
   * When the component is initialised the divs are fetched using a Http get and calculations are performed for the wrapper
  */
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

  /** Creates the Divs */
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
  
  /**
   * When the wrapper is scrolled to bottom the Divs are loaded
  */
  addDivs() {  
    this.newDivs = true;
    setTimeout(() => {

      this.createDivs()

      this.newDivs = false;
    }, 1000);

  }

  /**
   * When a Tenth Div is clicked the modal is displayed
   * 
   * @param {string} divTitle - The title of the Div.
   * @param {string} divContent - The content of the Div.
   * @param {number} divNo - The number of the Div.
  */
  tenthClick(divTitle:string, divContent:string, divNo:number) {
    this.modalTitle = "Div " + divNo + ": " + divTitle;
    this.modalContent = divContent;
  }

  /**
   * Identifies an item by its title.
   *
   * @param {any} item - The item to identify.
   * @returns {string} The title of the item.
  */
  identify(item: any) {
    return item.title;
  }
}
