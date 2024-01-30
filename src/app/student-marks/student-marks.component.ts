import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

/**
 * `StudentMarksComponent` is a component that displays student marks.
 */
@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {
  /** Reference to the MatSort directive for sorting data. */
  @ViewChild(MatSort) sort!: MatSort;

  /** Reference to the MatPaginator directive for pagination. */
  @ViewChild(MatPaginator) paginator!: MatPaginator;  

  /** Columns to be displayed in the table. */
  displayedColumns = ['position', 'name', 'class', 'sub_1', 'sub_2', 'sub_3'];

  /** Raw data from the server. */
  data: any;

  /** Data source for the MatTable. */
  dataSource: any;

  /**
   * Constructs the component and injects the HttpClient service.
   * @param {HttpClient} http - The injected HttpClient service.
   */
  constructor(private http: HttpClient) { }

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Here it fetches the data from the server and initializes the MatTableDataSource.
   */
  ngOnInit() {
    this.http.get('assets/data.json').subscribe({
      next: data => {
        this.data = data;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  /**
   * Applies a filter to the data.
   * @param {string} filterValue - The value to filter by.
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}