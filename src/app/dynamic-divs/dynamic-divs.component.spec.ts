import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { DetectBottomDirective } from '../shared/directives/detect-bottom.directive';
import { By } from '@angular/platform-browser';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

describe('DynamicDivsComponent', () => {
  let component: DynamicDivsComponent;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<DynamicDivsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DetectBottomDirective,
        SpinnerComponent
      ],
      declarations: [
        DynamicDivsComponent
      ],
    });

    fixture = TestBed.createComponent(DynamicDivsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a GET request and call createDivs on complete', () => {
    httpMock = TestBed.inject(HttpTestingController);
    const mockResponse = [{ title: 'Test', content: 'Test content' }];

    spyOn(component, 'createDivs');

    component.ngOnInit();

    const req = httpMock.expectOne('assets/dynamic-divs.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    // Assuming wrapper element exists in the DOM with specific dimensions
    expect(component.createDivs).toHaveBeenCalledTimes(component.rows + 1);
    httpMock.verify();     
  });

  it('should handle error from HTTP call', () => {
    httpMock = TestBed.inject(HttpTestingController);
    const mockError = new ProgressEvent('error');
  
    spyOn(console, 'error');
  
    component.ngOnInit();
  
    const req = httpMock.expectOne('assets/dynamic-divs.json');
    expect(req.request.method).toBe('GET');
    req.error(mockError);
  
    expect(console.error).toHaveBeenCalled();
    httpMock.verify(); 
  });

  it('should create divs and the tenth should have tenth set to true', () => {
    // Arrange
    component.noToLoad = 10;
    component.divContents = [
      { title: 'Test 1', content: 'Test content 1' },
      { title: 'Test 2', content: 'Test content 2' },
    ];
    component.responseLength = component.divContents.length;

    // Act
    component.createDivs();

    // Assert
    expect(component.divs.length).toBe(10);
    expect(component.divs[0]).toEqual({
      number: 1,
      title: 'Test 1',
      content: 'Test content 1',
      tenthDiv: false,
    });
    expect(component.divs[9]).toEqual({
      number: 10,
      title: 'Test 2',
      content: 'Test content 2',
      tenthDiv: true,
    });
  });

  it('should call addDivs when scrolledToBottom event is received', () => {
    // Arrange
    spyOn(component, 'addDivs');

    // Act
    fixture.detectChanges();
    const directiveDebugElement = fixture.debugElement.query(By.directive(DetectBottomDirective));
    const directiveInstance = directiveDebugElement.injector.get(DetectBottomDirective);
    directiveInstance.scrolledToBottom.emit();

    // Assert
    expect(component.addDivs).toHaveBeenCalled();
  });

  it('should set newDivs to true, create the divs and then set newDiws to false when addDivs is called', fakeAsync(() => {
    component.newDivs = false;
    spyOn(component, 'createDivs');
    component.addDivs();
    fixture.detectChanges();
    expect(component.newDivs).toBe(true);
    tick(1000);
    expect(component.createDivs).toHaveBeenCalled();
    expect(component.newDivs).toBe(false);
  }));

  it('should display modal when a tenth div is clicked', () => {
    // Arrange
    component.divs = [
      {
        number: 10,
        title: 'Test 10',
        content: 'Test content 10',
        tenthDiv: true,
      },
    ];
    fixture.detectChanges();

    // Act
    const divDebugElement = fixture.debugElement.query(By.css('.tenthBtn'));
    divDebugElement.triggerEventHandler('click', null);

    // Assert
    const modalDebugElement = fixture.debugElement.query(By.css('.modal'));
    expect(modalDebugElement).toBeTruthy();
  });

});