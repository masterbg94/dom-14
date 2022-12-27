import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control([], Validators.required),
      lastName: this.formBuilder.control([], Validators.required),
      number: this.formBuilder.control([]),
      email: this.formBuilder.control([], [Validators.email, Validators.required]),
      message: this.formBuilder.control([], Validators.required),
    });
  }

  ngOnInit(): void {
  }

  public sendEmail(): void {
  }

  public resetForm(formGroup: FormGroup): void {
    let control: AbstractControl;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }
}
