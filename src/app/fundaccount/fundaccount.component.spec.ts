import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundaccountComponent } from './fundaccount.component';

describe('FundaccountComponent', () => {
  let component: FundaccountComponent;
  let fixture: ComponentFixture<FundaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
