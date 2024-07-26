import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ProductserviceService } from '../services/productservice.service';
import { AuthserviceService } from '../services/authservice.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrl: './mainview.component.css',
})
export class MainviewComponent implements OnInit {
  constructor(private s1: ProductserviceService, private s2: AuthserviceService, private r:RouterService) {}
  userName: string = '';
  showSpinner: boolean = false;
  normalLoggedIn: boolean = false;
  adminLoggedIn:boolean = false;
  ngOnInit(): void {

    this.s2.adminLoginToMainViewSubject.subscribe({
      next:data => {
        if( typeof data == 'string') {

          this.userName = data;

        }

        if ( typeof data == 'boolean') {

          this.adminLoggedIn = data;
          this.normalLoggedIn = !data;

        }
      }
    })
  }

 

  loggedOut() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
      this.normalLoggedIn = false;
      this.adminLoggedIn = false;
      
      alert("You Are Successfuly Logged Out")
      this.s2.loggedOut();
      this.r.toLoginView();
    }, 2000);
  }
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
