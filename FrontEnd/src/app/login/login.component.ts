import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
import { login } from '../Model/Login';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private s2: AuthserviceService,
    private s1: ProductserviceService
  ) {}

  adminLogin: boolean = false;
  showSpinner: boolean = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required]],
    authKey: [''],
  });
  viewloginAsAdmin() {
    this.adminLogin = !this.adminLogin;
  }

  loginFormSubmitted() {
    this.showSpinner = true;

    setTimeout(() => {
      this.showSpinner = false;
      const formSubmissionData = this.loginForm.value as login;
     
      this.s2.adminCheck(formSubmissionData);
    }, 2000);
  }
}
