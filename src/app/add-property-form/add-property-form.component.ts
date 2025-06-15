import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterLink, } from '@angular/router';


@Component({
  selector: 'app-add-property-form',
  standalone: true,
  imports: [MatButtonModule, RouterLink, ReactiveFormsModule, CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule,],
  templateUrl: './add-property-form.component.html',
  styleUrls: ['./add-property-form.component.scss']
})
export class AddPropertyFormComponent implements OnInit, OnChanges {

  @Input() property: any = {};
  @Output() formSubmit  = new EventEmitter<any>();

  //public is a access modifiers keyword to define visibility and accessibility of class//
  public addPropertyForm!: FormGroup
  password: string = '';

  //constructor is a special method that is automatically invoked when class created, 
  //here i create constructor to with dependency injection to inject component 
  //or initialising the class//
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.addPropertyForm = this.fb.group({
      propertyName: ['', [Validators.required]],
      propertyDescription: ['', [Validators.required, Validators.maxLength(500)]],
      propertyType: ['', [Validators.required]],
      cityName: ['', [Validators.required,]],
      pincode: ['', [Validators.required, Validators.maxLength(6)]],
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      Latitude: [''],
      Longitude: [''],


    })


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['property'] && this.addPropertyForm) {
      this.addPropertyForm.patchValue(this.property || {});
    }
  }

  onBasicDetailsClick(): void {
    this.markAllFieldsTouched(this.addPropertyForm);
  }

  private markAllFieldsTouched(FormGroup: FormGroup): void {
    Object.values(FormGroup.controls).forEach(control => {
      control.markAsTouched();
      control.updateValueAndValidity();
    });

  }
   onSubmit() {
    if (this.addPropertyForm.valid) {
      console.log('Form data emitted:', this.addPropertyForm.value);
      this.formSubmit.emit(this.addPropertyForm.value); // ← Emit to parent component
    } 
    else {
      this.addPropertyForm.markAllAsTouched();
    }
  }

}





