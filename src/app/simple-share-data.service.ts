import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleShareDataService {
  private bookingData = {
    name: '',
    hotel: '',
    checkIn: '',
    checkOut: '',
    ratePerNight: 0
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

  //using service to add business logic through components//
  getStayDuration(): number {
    const checkIn = new Date(this.bookingData.checkIn);
    const checkOut = new Date(this.bookingData.checkOut);
    const timeDiff = checkOut.getTime()-checkIn.getTime();
    return Math.max(timeDiff/(1000*3600*24));

  }
//1000*3600*24 converting millisec to number of days//

getTotalPrice(): number {
  return this.getStayDuration() * this.bookingData.ratePerNight;
}

}
