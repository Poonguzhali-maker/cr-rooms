import { Component,Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-hotel-booking',
  imports: [FormsModule, MatButtonModule, ReactiveFormsModule,MatSelectModule, MatFormFieldModule],
  templateUrl: './hotel-booking.component.html',
  styleUrl: './hotel-booking.component.scss'
})


export class HotelBookingComponent {

public hotelBookingForm!: FormGroup

  //allows to pass data from parent to child//
  //input decorator used to asign 'hotelName' as a property which is used in parent template. 
  // hotelName initiated with the empty string since it is bound with the parent.html[hotelName]="selected Hotel" //
  @Input() hotelName = '';

  //allows to send event to parent from child//
//output asigns the booking property will send data to parent component.
//booking is an output event//
//object created with two property: string and num//
@Output() booking = new EventEmitter<{ guest: string; rooms: number }>();

  guestName = '';
  roomCount = 1;

  constructor(private fb:FormBuilder){
    this.hotelBookingForm=this.fb.group({

    })
  }

  submitBooking() {
    if (this.guestName && this.roomCount) {
      //emits the booking event using the eventemitter//
      this.booking.emit({ guest: this.guestName, rooms: this.roomCount });
      this.guestName = '';
      this.roomCount = 1;
console.log('Form is valid',this.hotelBookingForm.value);

    }
  }

}

// input-The parent component sets the 'selectedHotel' variable and passes it into the child using [hotelName]="selectedHotel"//

//Inside the child, '@Input() hotelName' receives this value and displays it in the template.//

//output-When the form in the child component is submitted, the submitBooking() method emits an event using the booking EventEmitter.

//the emitted object, containing the guest name and the number of rooms, travels to the parent component.

//The parent listens for this event with (booking)="handleBooking($event)" and calls the handleBooking method, which updates lastBooking to show the received booking details on the page.//