import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMarksRoutingModule } from './student-marks-routing.module';
import { StudentMarksComponent } from './student-marks.component';
import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StudentMarksComponent,
  ],
  imports: [
    CommonModule,
    StudentMarksRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ]
})
export class StudentMarksModule { }
