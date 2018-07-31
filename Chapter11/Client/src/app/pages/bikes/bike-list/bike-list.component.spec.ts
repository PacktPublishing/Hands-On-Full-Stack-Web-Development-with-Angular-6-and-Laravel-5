import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// App imports
import { BikeListComponent } from './bike-list.component';
import { BikeSearchPipe } from '../_pipes/bike-search.pipe';
import { HttpErrorHandler } from './../../../shared/_services/http-handle-error.service';


describe('BikeListComponent', () => {
  let component: BikeListComponent;
  let fixture: ComponentFixture<BikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        BikeListComponent,
        BikeSearchPipe
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [HttpErrorHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
