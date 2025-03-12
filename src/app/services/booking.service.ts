import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  bookings: Booking[] = [];

  isLoading = false;
  $bookings = new Subject<any>();

  getBookings() {
    // como no tengo acceso a filtros, solo se realizara una busqueda unica
    if (this.bookings.length > 0) return;
    this.isLoading = true;
    this.http
      .get<Booking[]>(`${environment.API_URL}/booking`)

      .subscribe({
        next: (value) => {
          this.bookings = value;
          this.$bookings.next(true);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }
}
