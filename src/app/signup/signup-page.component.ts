import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    // Handle form submission here
    console.log(form.value); // You can access form values using form.value
    // Redirect to desired route after login
    this.router.navigateByUrl('/dashboard');
  }
}
