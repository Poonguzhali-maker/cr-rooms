import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-booking-details',
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule,MatRadioModule, ],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[...provideNativeDateAdapter()]
})


export class BookingDetailsComponent {

public bookingDetailsForm!:FormGroup

constructor(private fb:FormBuilder){

  this.bookingDetailsForm=this.fb.group({

  }

  )
}


onSubmit() {
  if (this.bookingDetailsForm.valid) {
    const bookingDetailsForm = this.bookingDetailsForm.value;
    console.log('Form is valid. Submitted:', this.bookingDetailsForm.value);
    


    
  } 
}

}
