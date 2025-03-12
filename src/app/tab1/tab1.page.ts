import { Component, OnInit } from '@angular/core';
import { TutorService } from '../services/tutor.service';
import { Tutor } from '../models/tutor.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  constructor(private tutorService: TutorService) {}
  ngOnInit(): void {
    this.tutorService.getTutors();

    this.tutorService.$tutors.subscribe({
      next: () => {
        this.filteredTutors = this.tutorService.tutors;
      },
    });
  }
  selectedSpeciality = '';
  filteredTutors: Tutor[] = [];

  filterTutors(): void {
    if (!this.selectedSpeciality) {
      this.filteredTutors = this.tutors;
      return;
    }

    this.filteredTutors = this.tutors.filter(
      (tutor) =>
        tutor.speciality.toLowerCase() === this.selectedSpeciality.toLowerCase()
    );
  }

  get tutors() {
    return this.tutorService.tutors;
  }

  get isLoading() {
    return this.tutorService.isLoading;
  }
}
