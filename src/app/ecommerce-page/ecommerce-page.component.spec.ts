import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercePageComponent } from './ecommerce-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DetectBottomDirective } from '../shared/directives/detect-bottom.directive';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Options } from '../enums/grid-options';

describe('EcommercePageComponent', () => {
  let component: EcommercePageComponent;
  let httpMock: HttpTestingController;  
  let fixture: ComponentFixture<EcommercePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EcommercePageComponent
      ],
      imports: [
        MatGridListModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        DetectBottomDirective,
        HttpClientTestingModule
      ]
    });
    fixture = TestBed.createComponent(EcommercePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a GET request', () => {
    httpMock = TestBed.inject(HttpTestingController);
    const mockResponse = [{ title: 'Test', content: 'Test content' }];

    component.ngOnInit();

    const req = httpMock.expectOne('assets/e-commerce-data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    httpMock.verify();     
  });  

  it('should handle error from HTTP call', () => {
    httpMock = TestBed.inject(HttpTestingController);
    const mockError = new ProgressEvent('error');
  
    spyOn(console, 'error');
  
    component.ngOnInit();
  
    const req = httpMock.expectOne('assets/e-commerce-data.json');
    expect(req.request.method).toBe('GET');
    req.error(mockError);
  
    expect(console.error).toHaveBeenCalled();
    httpMock.verify(); 
  });

  it('should call bottom method when scrolledToBottom received', () => {
    // Arrange
    spyOn(component, 'bottom');

    // Act
    fixture.detectChanges();
    const directiveDebugElement = fixture.debugElement.query(By.directive(DetectBottomDirective));
    const directiveInstance = directiveDebugElement.injector.get(DetectBottomDirective);
    directiveInstance.scrolledToBottom.emit();

    // Assert
    expect(component.bottom).toHaveBeenCalled();    
  });

  it('should alert when bottom method is called', () => {
    // Arrange
    spyOn(window, 'alert');

    // Act
    component.bottom();

    // Assert
    expect(window.alert).toHaveBeenCalledWith('bottom reached');
  });

});
