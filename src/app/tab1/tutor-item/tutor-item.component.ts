import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/app/models/tutor.model';

@Component({
  selector: 'tutor-item',
  standalone: false,
  templateUrl: './tutor-item.component.html',
  styleUrls: ['./tutor-item.component.scss'],
})
export class TutorItemComponent implements OnInit {
  @Input() tutor!: Tutor;
  @Input() index!: number;
  constructor() {}

  ngOnInit() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
