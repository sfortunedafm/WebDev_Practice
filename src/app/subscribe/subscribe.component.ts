import { Component } from '@angular/core';
// import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    // confirmPassword: new FormControl('', Validators.required), // uncomment if repeat password field desired
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')])
  });

  onSubmit(): void {
    console.log("button pressed");
    console.log(this.registerForm.value);
  }

  // // form = new FormGroup({
  // //   emailFormControl : new FormControl('', [Validators.required, Validators.email]),
  // //   passwordControl : new FormControl('', [Validators.required,
  // //     Validators.minLength(8)])
  // // });
  // form = new FormGroup({
  //   first: new FormControl('Nancy', Validators.minLength(2)),
  //   last: new FormControl('Drew'),
  //   Email: new FormControl('', [Validators.required, Validators.email]),
  //   Password: new FormControl('', [Validators.required,
  //     Validators.minLength(8)])
  // });
  // onSubmit(): void {
  //   console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
  // }
  // get first(): any {
  //   return this.form.get('first');
  // }
  // // setValue() {
  // //   this.form.setValue({first: 'Carson', last: 'Drew'});
  // // }
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordControl = new FormControl('', [Validators.required,
  //   Validators.minLength(8)]);
  // // tiles: Tile[] = [
  // //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  // //   {text: 'Sidebar Space', cols: 1, rows: 2, color: 'lightgreen'},
  // //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  // //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // // ];
  hide = true;


}
