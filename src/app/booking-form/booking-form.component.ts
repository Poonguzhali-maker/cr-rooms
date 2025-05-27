
import { Component } from '@angular/core';
import { SimpleShareDataService } from '../simple-share-data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  imports:[FormsModule]
})
export class BookingFormComponent {
  booking = {
    name: '',
    hotel: '',
    checkIn: '',
    checkOut: ''
  };

  constructor(private simpleShareService: SimpleShareDataService) {}

  submitBooking() {
    this.simpleShareService.setBooking(this.booking);
  }
}
