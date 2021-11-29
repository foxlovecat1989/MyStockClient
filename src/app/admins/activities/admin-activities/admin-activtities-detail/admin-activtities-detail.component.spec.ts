import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActivtitiesDetailComponent } from './admin-activtities-detail.component';

describe('AdminActivtitiesDetailComponent', () => {
  let component: AdminActivtitiesDetailComponent;
  let fixture: ComponentFixture<AdminActivtitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActivtitiesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActivtitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
