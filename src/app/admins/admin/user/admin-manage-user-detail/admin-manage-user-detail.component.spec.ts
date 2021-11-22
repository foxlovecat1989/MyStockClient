import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageUserDetailComponent } from './admin-manage-user-detail.component';

describe('AdminManageUserDetailComponent', () => {
  let component: AdminManageUserDetailComponent;
  let fixture: ComponentFixture<AdminManageUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
