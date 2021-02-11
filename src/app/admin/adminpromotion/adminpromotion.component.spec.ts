import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpromotionComponent } from './adminpromotion.component';

describe('AdminpromotionComponent', () => {
  let component: AdminpromotionComponent;
  let fixture: ComponentFixture<AdminpromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
