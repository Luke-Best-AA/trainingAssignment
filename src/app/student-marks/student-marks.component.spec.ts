import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentMarksComponent } from './student-marks.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('StudentMarksComponent', () => {
  let component: StudentMarksComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<StudentMarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        StudentMarksComponent,      
      ]
    });
    fixture = TestBed.createComponent(StudentMarksComponent);
    component = fixture.componentInstance;
    component.dataSource = { filter: '' }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a GET request', () => {
    httpMock = TestBed.inject(HttpTestingController);
    const mockResponse = [{ title: 'Test', content: 'Test content' }];

    component.ngOnInit();

    const req = httpMock.expectOne('assets/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    httpMock.verify();     
  });

  it('should handle error from HTTP call', () => {
    httpMock = TestBed.inject(HttpTestingController);
    const mockError = new ProgressEvent('error');
  
    spyOn(console, 'error');
  
    component.ngOnInit();
  
    const req = httpMock.expectOne('assets/data.json');
    expect(req.request.method).toBe('GET');
    req.error(mockError);
  });

  it('should call FilterData on keyup of input field', () => {
  spyOn(component, 'applyFilter');
  const inputElement = fixture.debugElement.query(By.css('input')); // Replace 'input' with the actual selector of your input element

  inputElement.triggerEventHandler('keyup', { target: { value: 'test' } });

  expect(component.applyFilter).toHaveBeenCalledWith('test');
  });

  it('should set dataSource.filter to the trimmed and lowercased input', () => {
    const filterValue = ' Test Value ';
    component.applyFilter(filterValue);
    expect(component.dataSource.filter).toBe('test value');
  });

});
