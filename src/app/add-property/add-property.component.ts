import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { AddPropertyDataService } from '../services/add-property-data.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-property',
    imports: [MatButtonModule, ReactiveFormsModule, CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatCardModule,],
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.scss'],
    standalone: true,
})


export class AddPropertyComponent implements OnInit {


    //public is a access modifiers keyword to define visibility and accessibility of class//
    public addPropertyForm!: FormGroup;

    //constructor is a special method that is automatically invoked when class created, 
    //here i create constructor to with dependency injection to inject component 
    //or initialising the class//
    constructor(private fb: FormBuilder,
        private addPropertyDataService: AddPropertyDataService,
        private router: Router) { }

    ngOnInit(): void {

        this.addPropertyForm = this.fb.group({
            propertyName: ['', [Validators.required]],
            propertyDescription: ['', [Validators.required, Validators.maxLength(500)]],
            propertyType: ['', [Validators.required]],
            cityName: ['', [Validators.required,]],
            pincode: ['', [Validators.required, Validators.maxLength(6)]],
            addressLine1: ['', [Validators.required]],
            addressLine2: [''],
            latitude: [''],
            longitude: [''],
            adminImportantNotes: [''],
            adminHighlightText: [''],
            businessType: ['', Validators.required],

        });


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

    onSaveProperty(): void {
        if (this.addPropertyForm.valid) {
            console.log('Form submitted:', this.addPropertyForm.value);

            this.addPropertyDataService.addProperty(this.addPropertyForm.value).subscribe({
                next: (response: any) => {
                    console.log('Saved to backend:', response);

                    //save data for listProperty component//

                    this.addPropertyDataService.addPropertyToList(this.addPropertyForm.value);
                    //navigate to edit page//
                    this.router.navigate(['/list-property']);
                },
                error: (err: any) => {
                    console.error('Error:', err);
                }
            });
        }
        else {
            this.addPropertyForm.markAllAsTouched();


            console.warn('Form is invalid');
            return;

        }

    }


}


