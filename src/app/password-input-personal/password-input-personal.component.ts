import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-input-personal',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule,
    NgClass
  ],
  templateUrl: './password-input-personal.component.html',
  styleUrl: './password-input-personal.component.css'
})
export class PasswordInputPersonalComponent {
  password: string = '';
  passwordStrength: 'empty' | 'lessThan8' | 'easy' | 'medium' | 'strong' = 'empty';

  checkPasswordStrength(): void {
    if (!this.password) {
      this.passwordStrength = 'empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'lessThan8';
    } else if (this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*()_+]/)) {
      this.passwordStrength = 'strong';
    } else if ((this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/)) ||
      (this.password.match(/[a-zA-Z]/) && this.password.match(/[!@#$%^&*()_+]/)) ||
      (this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*()_+]/))) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'easy';
    }
  }
}
