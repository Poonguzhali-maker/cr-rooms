import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingComponent } from './hotel-booking.component';

describe('HotelBookingComponent', () => {
  let component: HotelBookingComponent;
  let fixture: ComponentFixture<HotelBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
