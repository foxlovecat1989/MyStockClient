import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockEditComponent } from './admin-stock-edit.component';

describe('AdminStockEditComponent', () => {
  let component: AdminStockEditComponent;
  let fixture: ComponentFixture<AdminStockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
