import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewComponent } from './mainview/mainview.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrderrequestsComponent } from './orderrequests/orderrequests.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { authGuard } from './guards/auth.guard';
import { NotAdminAccessComponent } from './not-admin-access/not-admin-access.component';
import { deactivateGuardGuard } from './guards/deactivate-guard.guard';
import { orderGuardGuard } from './guards/order-guard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent

  },

  {
    path:'login',
    component:LoginComponent
  }, 
  {
    path:'orderrequests',
    component:OrderrequestsComponent,
    // canActivate:[authGuard]
  },
  {
    path:'products/:key1',
    component:SingleproductComponent,
    canDeactivate:[deactivateGuardGuard],
    canActivate:[orderGuardGuard]
  },
  {
    path:'adminerror',
    component:NotAdminAccessComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
