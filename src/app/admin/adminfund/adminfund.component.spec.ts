import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfundComponent } from './adminfund.component';

describe('AdminfundComponent', () => {
  let component: AdminfundComponent;
  let fixture: ComponentFixture<AdminfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
