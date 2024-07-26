import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { deactivateGuardGuard } from './deactivate-guard.guard';

describe('deactivateGuardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters: any[]) => 
      TestBed.runInInjectionContext(() => deactivateGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
