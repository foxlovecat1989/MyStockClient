import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivitiesEditComponent } from './admin-activities-edit.component';

describe('AdminActivitiesEditComponent', () => {
  let component: AdminActivitiesEditComponent;
  let fixture: ComponentFixture<AdminActivitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActivitiesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
