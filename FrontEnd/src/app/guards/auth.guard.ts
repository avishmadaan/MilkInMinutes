import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { RouterService } from '../services/router.service';

export const authGuard: CanActivateFn = (route, state) => {
  let s1 = inject(AuthserviceService);
  let r = inject(RouterService);

  if (s1.isAdminLogin) {
    return true;
    
  } else {
    r.toNotAdminView();
    return false;
  }
};
