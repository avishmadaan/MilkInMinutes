import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private r:Router) { }

  navigateToRequestsView() {
    this.r.navigate(["orderrequests"])
  }

  navigateToProductsView() {
    this.r.navigate([""])
  }

  toNotAdminView(){
    this.r.navigate(["adminerror"]);
  }

  toLoginView() {
    this.r.navigate(['login']);
  }
}
