import { TestBed } from '@angular/core/testing';

import { AuthGuard1 } from './auth-guard1.service';

describe('AuthGuard1', () => {
  let service: AuthGuard1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
