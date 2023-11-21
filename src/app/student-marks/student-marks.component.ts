import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})

export class StudentMarksComponent {
  displayedColumns = ['position', 'name', 'class', 'sub_1', 'sub_2', 'sub_3'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  class: number;
  sub_1: number;
  sub_2: number;
  sub_3: number;
  position: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Luke Best', class: 10, sub_1: 90, sub_2: 80, sub_3: 70},
  {position: 2, name: 'John Doe', class: 10, sub_1: 70, sub_2: 90, sub_3: 60},
  {position: 3, name: 'Jane Doe', class: 10, sub_1: 60, sub_2: 70, sub_3: 90},
  {position: 4, name: 'John Smith', class: 9, sub_1: 80, sub_2: 60, sub_3: 80},
  {position: 5, name: 'Jane Smith', class: 9, sub_1: 90, sub_2: 70, sub_3: 60},
  {position: 6, name: 'Luke Skywalker', class: 9, sub_1: 70, sub_2: 90, sub_3: 80},
  {position: 7, name: 'Anakin Skywalker', class: 8, sub_1: 60, sub_2: 80, sub_3: 90},
  {position: 8, name: 'Darth Vader', class: 8, sub_1: 80, sub_2: 60, sub_3: 70},
  {position: 9, name: 'Obi-Wan Kenobi', class: 7, sub_1: 90, sub_2: 70, sub_3: 60},
  {position: 10, name: 'Han Solo', class: 7, sub_1: 70, sub_2: 90, sub_3: 80},
];
