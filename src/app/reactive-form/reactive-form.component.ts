import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
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



}
