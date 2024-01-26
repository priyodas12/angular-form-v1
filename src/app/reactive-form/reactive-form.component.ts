import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  randomUserName: string = '';

  reactiveForm!: FormGroup;

  ngOnInit() {
    console.log("OnInit");
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl('male'),
      address: new FormControl(''),
      country: new FormControl('IND'),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
    });
  }

  resetForm() {
    this.reactiveForm.reset({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl('male'),
      address: new FormControl(''),
      country: new FormControl('IND'),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
      // Set other default values here
    });
  }

  generateRandomUsername = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    const randomChars = Array.from({ length: 10 }, () => this.getRandomChar(characters)).join('');
    const randomNumberPair = Array.from({ length: 3 }, () => this.getRandomChar(numbers)).join('');

    const randomUsername = `${randomChars}${randomNumberPair}`;

    console.log(randomUsername);

    return randomUsername;
  };

  getRandomChar = (source: string) => source[Math.floor(Math.random() * source.length)];

  OnFormSubmitted() {
    console.log(this.reactiveForm);
    //this.resetForm();
  }

}
