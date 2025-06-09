
import { Component } from '@angular/core';
import { SimpleShareDataService } from '../simple-share-data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  imports:[FormsModule, MatButtonModule, MatDatepickerModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  providers: [provideNativeDateAdapter()],
  changeDetection:ChangeDetectionStrategy.OnPush, 
})


export class BookingFormComponent {
//object to store input data used for two way binding through [(ngModel)]
  booking = {
    name: '',
    hotel: '',
    checkIn: '',
    checkOut: '',
    ratePerNight: 100
  };

  //injecting two service SimpleShareDataService for submit data, 'router' is to navigate /booking summary after click Book button//
  constructor(private simpleShareDataService: SimpleShareDataService,
 private router: Router  ) {}

//function trigger when user submit the form//
  submitBooking(): void {
//to save data and submitting data to server//    
  this.simpleShareDataService.setBooking(this.booking);
//calls the service to post data to API, 'subscribe()' listens the response asynchronously// 
  this.simpleShareDataService.submitBookingToServer().subscribe({
    next: (res: any) => {
      console.log('✅ Booking saved:', res);
      this.router.navigate(['/bookingSummary']);
    },
    error: (err: any) => {
      console.error('Booking failed:', err);
    }
  });
}

}
