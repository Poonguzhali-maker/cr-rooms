import { Component, OnInit } from '@angular/core';
import { SimpleShareDataService } from '../simple-share-data.service';
import { CommonModule } from '@angular/common';
import { CurrencyPipe,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  imports: [CommonModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss'
})
export class BookingSummaryComponent implements OnInit{

   booking: any={};
   totalPrice: number =0;
   duration:number=0;

  constructor(private simpleShareDataService: SimpleShareDataService) {}

//gets the stored booking  and calculating price//
  loadBooking() {
    this.booking = this.simpleShareDataService.getBooking();
    this.totalPrice=this.simpleShareDataService.getTotalPrice();
    this.duration=this.simpleShareDataService.getStayDuration();
  }
//list of all booking fetched from API//
  allBookings: any[] = [];

// called automatically when the component loads// 
ngOnInit() {
  this.loadBooking();

  this.simpleShareDataService.getAllBookings().subscribe({
    next: (data: any[]) => {
      this.allBookings = data;
      console.log('✅ Bookings fetched:', data);
    },
    error: (err: any) => {
      console.error('Failed to fetch bookings:', err);
    }
  });
}


}
