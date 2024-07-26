import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainviewComponent } from './mainview/mainview.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SearchComponent } from './search/search.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { LoginComponent } from './login/login.component';
import { OrderrequestsComponent } from './orderrequests/orderrequests.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotFoundComponent } from './not-found/not-found.component';

import { NotAdminAccessComponent } from './not-admin-access/not-admin-access.component';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    SearchComponent,
    ProductlistComponent,
    ProductcardComponent,
    SingleproductComponent,
    LoginComponent,
    OrderrequestsComponent,
    HomepageComponent,
    NotFoundComponent,
    NotAdminAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatTableModule,
    MatPaginator,
    MatSortModule,
    MatSort
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
