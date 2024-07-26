import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { orderRequests } from '../Model/OrderRequests';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-orderrequests',
  templateUrl: './orderrequests.component.html',
  styleUrl: './orderrequests.component.css',
})
export class OrderrequestsComponent implements OnInit, AfterViewInit {
  requestList: orderRequests[] = [];

  displayedColumns: string[] = ['cusName', 'cusEmail', 'cusPhone', 'cusAddress','orderDetails','quantity','OrderDate','totalAmount'];
  dataSource = new MatTableDataSource<orderRequests>(this.requestList)


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MatSort)
  sort!: MatSort; 
  
  

  constructor(private s1: ProductserviceService) {
   
  }

  ngAfterViewInit(): void {
   
    if (this.paginator) {
      this.dataSource.paginator = this.paginator; // Set paginator if available
    }

    // if(this.sort)
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  
    this.s1.getOrderRequests().subscribe({
      next: (data) => {
        this.requestList = data;
        this.dataSource.data = this.requestList;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);
      },

      error: (e) => {
        // alert('Error while fetching Order Requests');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
