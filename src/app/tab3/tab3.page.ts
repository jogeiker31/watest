import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  constructor(private bookingService: BookingService) {}
  ngOnInit(): void {
    this.bookingService.getBookings();
    this.bookingService.$bookings.subscribe({
      next: () => {
        this.bookingsFiltered = this.bookingService.bookings;
      },
    });
  }

  bookingsFiltered: Booking[] = [];
  filterBookingsByUser(userId: number) {
    const filtered = this.bookings.filter(
      (booking) => booking.user.id === userId
    );
    this.bookingsFiltered = filtered;
  }
  get bookings() {
    return this.bookingService.bookings;
  }

  get isLoading() {
    return this.bookingService.isLoading;
  }
  searchTerm = '';
  filterBySearchTerm() {
    const lowerTerm = this.searchTerm.toLowerCase();
    this.bookingsFiltered = this.bookingService.bookings.filter(
      (booking) =>
        booking.user.first_name.toLowerCase().includes(lowerTerm) ||
        booking.user.last_name.toLowerCase().includes(lowerTerm) ||
        booking.user.email.toLowerCase().includes(lowerTerm)
    );
  }
}
