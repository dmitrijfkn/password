import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgIf, NgStyle} from "@angular/common";
import {ThemePalette} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, NgStyle, MatIcon],
})
export class AngularMaterialComponent {
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password required';
    }

    return this.password.hasError('minlength') ? 'Password shouldn\'t be shorter then 8 symbols' : '';
  }

  passwordStrength: 'empty' | 'lessThan8' | 'easy' | 'medium' | 'strong' = 'empty';

  hide = true;
  hintColor: string = "#ff0000";

  checkPasswordStrength(): void {
    if (!(this.password && this.password.getRawValue())) {

      this.passwordStrength = 'empty';

      //@ts-ignore
    } else if (this.password.getRawValue().match(/[a-zA-Z]/) &&
      //@ts-ignore
      this.password.getRawValue().match(/[0-9]/) &&
      //@ts-ignore
      this.password.getRawValue().match(/[!@#$%^&*()_+]/)) {

      this.passwordStrength = 'strong';
      this.hintColor = "#00ff0d";

      //@ts-ignore
    } else if ((this.password.getRawValue().match(/[a-zA-Z]/) && this.password.getRawValue().match(/[0-9]/)) ||
      //@ts-ignore
      (this.password.getRawValue().match(/[a-zA-Z]/) && this.password.getRawValue().match(/[!@#$%^&*()_+]/)) ||
      //@ts-ignore
      (this.password.getRawValue().match(/[0-9]/) && this.password.getRawValue().match(/[!@#$%^&*()_+]/))) {
      this.passwordStrength = 'medium';
      this.hintColor = "#e5da06";
    } else {

      this.passwordStrength = 'easy';
      this.hintColor = "#ff0000";

    }
  }
}
