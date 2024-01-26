import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent {

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
