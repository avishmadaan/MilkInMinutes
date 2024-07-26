import { Component, Input } from '@angular/core';
import { Product } from '../Model/products';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductcardComponent {
  @Input()
  singleProduct: Product = {};
}
