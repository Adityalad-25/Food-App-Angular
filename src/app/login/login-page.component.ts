import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    // Handle form submission here
    console.log(form.value); // You can access form values using form.value
    // Redirect to desired route after login
    this.router.navigateByUrl('/dashboard');
  }
}
