import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form-v1';

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
  onFormSubmit(f: NgForm) {
    console.log("Form Submitted!");
    console.log(f);
    console.log(this.userdata);
    this.resetForm();
  }
}
