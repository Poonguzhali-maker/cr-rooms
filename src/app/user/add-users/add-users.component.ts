import {ChangeDetectionStrategy, Component,} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormControl, FormArray } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import { strongPasswordValidator } from '../../validators/strong-password.validator';

@Component({

  selector: 'app-add-users',
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSlideToggleModule, MatSelectModule, MatInputModule, MatIconModule],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class AddUsersComponent {
public addUsersForm!:FormGroup


constructor(private fb:FormBuilder){
this.addUsersForm=this.fb.group({

  firstName:['',[Validators.required, Validators.minLength(3)]],
lastName:['',[Validators.required,Validators.minLength(3)]],
passWord:['',[Validators.required,strongPasswordValidator]],
email:['',[Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
phoneNumber:['',[Validators.required]],
confirmPassword:['',[Validators.required, this.validateSamePassword.bind(this)]],
addresses: this.fb.array([]),


  })
}


get addresses(): FormArray {
  return this.addUsersForm.get('addresses') as FormArray;
}

hidePassword = true;
hideConfirmPassword = true;



private validateSamePassword(control: AbstractControl): ValidationErrors | null {
  const password = control.parent?.get('passWord');
  const confirmPassword = control.parent?.get('confirmPassword');
  return password?.value === confirmPassword?.value ? null : { 'notSame': true };
}

addAddress(): void {
  const addressGroup = this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
  });
  this.addresses.push(addressGroup);
}

removeAddress(index: number): void {
  this.addresses.removeAt(index);
}

 onSubmit(): void {
console.log(this.addUsersForm);

if(this.addUsersForm.valid){
  const userDetails=this.addUsersForm.value;
  console.log('Form is valid.Submitted;', this.addUsersForm.value);
  this.addUsersForm.reset(); 
}
else{
  console.log('Form is invalid.');
  this.addUsersForm.markAllAsTouched();
}
 }

}


