import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';

@Component({
  selector: 'booking-item',
  standalone: false,
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.scss'],
})
export class BookingItemComponent implements OnInit {
  @Input() index!: number;
  @Input() booking!: Booking;
  constructor() {}

  ngOnInit() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
