import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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


  constructor(private http:HttpClient) {
    console.log('Hotel booking confirmed');
  }


//bookingForm component use this method to receive data and stores//
  setBooking(data: any) {
    
    this.bookingData = data;
    console.log('New booking data set:', data);
  }

  //bookingSummary component use this to retrieve stored data ie getter method// 
  getBooking() {

    return this.bookingData ??{};
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

//retrieve data from api//

getAllBookings():Observable<any>{
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  return this.http.get(apiUrl);
}

//service using httpClient for posting data to api//
submitBookingToServer(): Observable<any> {

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
return this.http.post<any>(apiUrl, this.bookingData)
}

}
