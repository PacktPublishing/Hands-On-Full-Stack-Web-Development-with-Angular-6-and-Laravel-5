import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// App imports
import { BuilderListComponent } from './builder-list.component';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';

describe('BuilderListComponent', () => {
  let component: BuilderListComponent;
  let fixture: ComponentFixture<BuilderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        BuilderListComponent
      ],
      providers: [HttpErrorHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
