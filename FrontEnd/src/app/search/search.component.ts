import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchedKeyword: string = '';
  selectedCategory: string = '';
  categories: any = [];

  ngOnInit(): void {
    this.getCategories();
  }

  constructor(private s1: ProductserviceService) {}

  getCategories() {
    this.s1.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
    });
  }

  searchFun() {
    this.s1.recieveSearchKeyword(this.searchedKeyword);
  }

  categorySelected() {
    this.s1.receiveCategory(this.selectedCategory);
  }
}
