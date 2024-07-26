import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/products';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent implements OnInit {
  constructor(private productService: ProductserviceService) {}
  productList: Product[] = [];
  originalList: Product[] = [];
  searchedText: string = '';
  categorySelected: string = '';
  showNoProductMessage: boolean = false;

  ngOnInit(): void {
    this.productService.getProductsList().subscribe({
      next: (data) => {
        this.productList = data;
        this.originalList = data;
      },

      error: (e) => {
        alert('Error Fetching products from server' + e);
      },
    });

    this.productService.searchKeywordChanged.subscribe({
      next: (data) => {
        this.searchedText = data;
        this.searchTextChanged(this.searchedText);
      },
    });

    this.productService.categorySelectedEmitter.subscribe({
      next: (data) => {
        this.categorySelected = data;
        this.searchTextChanged(this.searchedText);
      },
    });
  }

  searchTextChanged(keyword: string) {
    if (
      (keyword == '' && !this.categorySelected) ||
      (!keyword && !this.categorySelected)
    ) {
      this.productList = this.originalList;
    } else if (keyword && !this.categorySelected) {
      this.productList = this.originalList;

      this.productList = this.productList.filter((x) =>
        x.productName?.toLowerCase().includes(keyword.toLowerCase())
      );
    } else if (this.categorySelected && keyword == '') {
      this.productList = this.originalList.filter((x) =>
        x.category?.toLowerCase().includes(this.categorySelected.toLowerCase())
      );
    } else if (this.categorySelected && keyword) {
      this.productList = this.productList = this.originalList.filter((x) =>
        x.category?.toLowerCase().includes(this.categorySelected.toLowerCase())
      );

      this.productList = this.productList.filter((x) =>
        x.productName?.toLowerCase().includes(keyword.toLowerCase())
      );
    } else {

      this.productList = this.productList.filter((x) =>
        x.productName?.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (this.productList.length === 0) {
      this.showNoProductMessage = true;
    } else {
      this.showNoProductMessage = false;
    }
  }
}
