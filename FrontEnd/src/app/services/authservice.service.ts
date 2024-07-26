import { Injectable } from '@angular/core';
import { login } from '../Model/Login';
import { RouterService } from './router.service';
import { ProductserviceService } from './productservice.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private r: RouterService, private s1:ProductserviceService) {}

  isAdminLogin: boolean = false;

  isNormalLogin: boolean = false;

  adminLoginToMainViewSubject = new Subject<any>();

  adminCheck(data: login) {
    if (data.authKey == 'pass') {
      this.isAdminLogin = true;
      this.r.navigateToRequestsView();
      this.adminLoginToMainViewSubject.next(data.email);
      this.adminLoginToMainViewSubject.next(this.isAdminLogin);

      // this.s1.loggedIn(data.email,this.isAdminLogin);
    } else if (data.authKey != 'pass' && data.authKey != '') {
      alert('Wrong Auth Key');
    } else {
      alert('You are logged In');
      this.isNormalLogin = true;
      this.adminLoginToMainViewSubject.next(data.email);
      this.adminLoginToMainViewSubject.next(this.isAdminLogin);
      // this.s1.loggedIn(data.email,this.isAdminLogin);
      this.r.navigateToProductsView();
    }
  }

  loggedOut() {
    this.isAdminLogin=false;
    this.isNormalLogin= false;
  }
}
