import { Component } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
      username: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('male', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(''),
        country: new FormControl('IND', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
      }),
      skills: new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
      ])
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
      address: new FormGroup({
        street: new FormControl(''),
        country: new FormControl('IND'),
        city: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl(''),
      })
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
    console.log(this.reactiveForm)
  }

}
