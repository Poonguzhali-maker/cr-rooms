import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-popular-places',
  imports: [ReactiveFormsModule, MatSelectModule, MatSlideToggleModule, MatInputModule],
  templateUrl: './popular-places.component.html',
  styleUrl: './popular-places.component.scss'
})
export class PopularPlacesComponent {

  public popularPlacesForm!: FormGroup

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

    this.popularPlacesForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      latitude: [''],
      longitude: [''],
    })

  }

  onSubmit() {
    console.log(this.popularPlacesForm);

    if (this.popularPlacesForm.valid) {
      const popularPlacesDetails = this.popularPlacesForm.value;
      console.log('Form is valid. Submitted:', this.popularPlacesForm.value)
    }

    else {
      console.log('popularPlacesForm is invalid.controls:', this.popularPlacesForm.controls);

    }
  }
}