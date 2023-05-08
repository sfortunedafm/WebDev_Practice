import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
