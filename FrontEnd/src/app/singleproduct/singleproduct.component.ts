import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/products';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductserviceService } from '../services/productservice.service';
import { orderRequests } from '../Model/OrderRequests';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css',
})
export class SingleproductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _snackbar: MatSnackBar,
    private s1: ProductserviceService,
    private ac: ActivatedRoute
  ) {}

  product1: Product = {};

  ngOnInit(): void {
    this.ac.paramMap.subscribe({
      next: (x) => {
        let productName = x.get('key1');

        if (productName) {
          this.s1.getProduct(productName).subscribe({
            next: (data) => {
              this.product1 = data[0];
              this.orderForm.patchValue({
                orderDetails: {
                  product: this.product1.productName,
                },
              });
            },

            error: (e) => {
              console.log('Error came');
            },
          });
        }
      },
    });

  }

  orderForm = this.fb.group({
    cusName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    cusEmail: ['', [Validators.required, Validators.email]],
    cusPhone: ['', [Validators.required,  Validators.pattern(/^[789]\d{9}$/)]],
    cusAddress: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.min(100000)]],
    }),
    orderDetails: this.fb.group({
      product: ['', Validators.required],
      quantity: [
        '',
        [Validators.required, Validators.max(999), Validators.min(1), Validators.pattern(/^[1-9]\d*$/)],
      ],
    }),
  });

  Number(x:string):number {
 return Number(x);
  }

  orderSubmitted() {
    const requestData = this.orderForm.value as orderRequests;
    requestData.orderDetails.orderDate = new Date();
    requestData.orderDetails.totalAmount = (Number(this.product1.price) * Number( this.orderForm.get('orderDetails.quantity')?.value || ''));

    console.log(requestData);

    this.s1.sendOrderToServer(requestData).subscribe({
      next: (data) => {
        this._snackbar.open(
          'Congrats, You have Successfully Submitted Order Request',
          'Sucess',
          {
            duration: 4000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          }
        );
        this.orderForm.reset();
        this.orderForm.patchValue({
          orderDetails: {
            product: this.product1.productName,
          },
        });

        
       
        

        Object.keys(this.orderForm.controls).forEach((x) => {
          const control = this.orderForm.get(x);

          if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach((y) => {
              control.get(y)?.setErrors(null);
            });
          } else control?.setErrors(null);
        });
      },
      error: (e) => {
        alert('Error Ocurred While Submitting This Detail');
      },
    });

    
  }

  canDeactivate() {
    if (this.orderForm.dirty) {
      return confirm(
        'Are you sure you want to move, you data will not be stored'
      );
    } else {
      return true;
    }
  }
}
