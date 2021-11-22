import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockDetailComponent } from './admin-stock-detail.component';

describe('AdminStockDetailComponent', () => {
  let component: AdminStockDetailComponent;
  let fixture: ComponentFixture<AdminStockDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
