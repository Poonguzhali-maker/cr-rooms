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
import { HotelBookingComponent } from "./hotel-booking/hotel-booking.component";
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-booking-details',
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, MatRadioModule, HotelBookingComponent],
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[...provideNativeDateAdapter()]
})


export class BookingDetailsComponent {

public bookingDetailsForm!:FormGroup

constructor(private fb:FormBuilder){


  this.bookingDetailsForm=this.fb.group({
  propertyName: [''],
  bookingId: [''],
  date: [''],
  dateOption: [''] // For radio buttons (Today, Tomorrow, Week)
  
  }

   )
}

selectedHotel = 'Grand Palace Hotel';
lastBooking: { guest: string; rooms: number } | null = null;


handleBooking(booking: { guest: string; rooms: number }) {
    this.lastBooking = booking;

 }

onSubmit() {
  if (this.bookingDetailsForm.valid) {
    const bookingDetailsForm = this.bookingDetailsForm.value;
    console.log('Form is valid. Submitted:', this.bookingDetailsForm.value);
    


    
  } 
}

}
