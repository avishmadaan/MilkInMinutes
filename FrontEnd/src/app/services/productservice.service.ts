import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/products';
import { Observable, Subject } from 'rxjs';
import { orderRequests } from '../Model/OrderRequests';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:5500/product';

  requestsURL: string = 'http://localhost:3001/orderRequest';

  searchKeywordChanged = new Subject<string>();
  categorySelectedEmitter = new Subject<string>();
  loggedInSubject = new Subject<string>();

  getProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  loggedIn(data: any) {
    return this.loggedInSubject.next(data);
  }

  sendOrderToServer(data: orderRequests): Observable<orderRequests> {
    return this.http.post<orderRequests>(this.requestsURL, data);
  }

  recieveSearchKeyword(keyword: string) {
    this.searchKeywordChanged.next(keyword);
  }

  receiveCategory(category: string) {
    this.categorySelectedEmitter.next(category);
  }

  getOrderRequests(): Observable<orderRequests[]> {
    return this.http.get<orderRequests[]>(this.requestsURL);
  }

  getProduct(name: string): Observable<Product[]> {
    const params = new HttpParams().set('productName', name);


    return this.http.get<Product[]>(this.url, { params });
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5500/category');
  }
}
