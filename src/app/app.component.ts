import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form-v1';

  @ViewChild('formData', { static: true }) signupForm!: NgForm;

  userdata: any = {
    username: '',
    email: '',
    gender: '',
  }

  constructor() {
    console.log("form component loaded!");
  }

  resetForm() {
    this.userdata = {
      username: '',
      email: '',
      gender: '',
    }
  }

  validateEmail(email: string) {
    console.log("validating email value...");
  }

  onFormSubmit() {
    console.log("Form Submitted!");
    console.log(this.signupForm.controls['email'].valid);
    console.log(this.userdata);
    this.resetForm();
  }
}
