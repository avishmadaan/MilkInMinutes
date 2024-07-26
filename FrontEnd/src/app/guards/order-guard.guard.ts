import { CanActivateFn } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { RouterService } from '../services/router.service';
import { inject } from '@angular/core';

export const orderGuardGuard: CanActivateFn = (route, state) => {

  let s1 = inject(AuthserviceService);
  let r = inject(RouterService)


  if(s1.isNormalLogin || s1.isAdminLogin) {
    return true
  }

  else {
    alert('Login To Order Any Product');
    r.toLoginView()
    return false
  }
};
