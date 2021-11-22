import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageUserEditComponent } from './admin-manage-user-edit.component';

describe('AdminManageUserEditComponent', () => {
  let component: AdminManageUserEditComponent;
  let fixture: ComponentFixture<AdminManageUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageUserEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
