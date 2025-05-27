import { Component } from '@angular/core';
import { SimpleShareDataService } from '../simple-share-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  imports: [CommonModule],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss'
})
export class BookingSummaryComponent {

   booking: any;

  constructor(private simpleShareDataService: SimpleShareDataService) {}

  loadBooking() {
    this.booking = this.simpleShareDataService.getBooking();
  }

}
