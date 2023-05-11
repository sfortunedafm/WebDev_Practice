import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css', '../app.component.css']
})
export class CheckoutComponent {

  hide = true;


  purchaseForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    // confirmPassword: new FormControl('', Validators.required), // uncomment if repeat password field desired
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    payment: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required)
  });
  onSubmit(): void {
    console.log("button pressed");
    console.log(this.purchaseForm.value);
  }
  formatLabel = (value: number) => {
    return "every " + value + " weeks";
  };
}
