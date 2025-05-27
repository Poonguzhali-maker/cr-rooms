import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleShareDataService {
  private bookingData = {
    name: '',
    hotel: '',
    checkIn: '',
    checkOut: ''
  };


  constructor() {
    console.log('Hotel booking confirmed');
  }


//bookingForm component use this method to receive data and stores//
  setBooking(data: any) {
    
    this.bookingData = data;
    console.log('New booking data set:', data);
  }

  //bookingSummary component use this to retrieve stored data ie getter method// 
  getBooking() {

    return this.bookingData;
  }

}
