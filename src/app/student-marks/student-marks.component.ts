import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})

export class StudentMarksComponent {
  displayedColumns = ['position', 'name', 'class', 'sub_1', 'sub_2', 'sub_3'];
  data: any;
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/data.json').subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;      
    });
  }

  
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
