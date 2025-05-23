import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterLink, } from '@angular/router';


@Component({
  selector: 'app-add-property',
  standalone:true,
  imports: [MatButtonModule, RouterLink, ReactiveFormsModule,CommonModule,MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule, ],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit{
//public is a access modifiers keyword to define visibility and accessibility of class//
  public addPropertyForm!: FormGroup
password:string='';

//constructor is a special method that is automatically invoked when class created, 
//here i create constructor to with dependency injection to inject component 
//or initialising the class//
constructor(private fb:FormBuilder){}

  ngOnInit():void{

  
  this.addPropertyForm=this.fb.group({
    propertyName: ['', [Validators.required]],
    propertyDescription:['', [Validators.required, Validators.maxLength(500)]],
    propertyType: ['', [Validators.required]],
    cityName: ['', [Validators.required, ]],
    pincode: ['', [Validators.required, Validators.maxLength(6)]],
    addressLine1:['',[Validators.required]],
    addressLine2:[''],
    Latitude:[''],
    Longitude:[''],
    

  })


}

 onBasicDetailsClick(): void {
    this.markAllFieldsTouched(this.addPropertyForm);
  }

private markAllFieldsTouched(FormGroup: FormGroup):void {
  Object.values(FormGroup.controls).forEach(control => {
    control.markAsTouched();
    control.updateValueAndValidity();
  });

}
onSubmit() {

  console.log(this.addPropertyForm);
  console.log(this.addPropertyForm.controls);
  console.log(this.addPropertyForm.errors);
  
  if (this.addPropertyForm.valid) {
    const userDetails = this.addPropertyForm.value;
    console.log('Form is valid. Submitted:', this.addPropertyForm.value);
    
  } 
  else{
    console.log('addPropertyForm is invalid.controls:',this.addPropertyForm.controls);
  }
}

}




