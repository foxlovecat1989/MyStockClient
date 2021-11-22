import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyDetailComponent } from './classify-detail.component';

describe('ClassifyDetailComponent', () => {
  let component: ClassifyDetailComponent;
  let fixture: ComponentFixture<ClassifyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
