import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutor } from '../models/tutor.model';
import { environment } from 'src/environments/environment.prod';
import { Subject, subscribeOn, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

 constructor(private http: HttpClient) {}

  tutors: Tutor[] = [];

  $tutors = new Subject<any>()

  isLoading = false;

  getTutors() {
    // como no tengo acceso a filtros, solo se realizara una busqueda unica
    if (this.tutors.length > 0) return;
    this.isLoading = true;
    this.http
      .get<Tutor[]>(`${environment.API_URL}/tutors`)

      .subscribe({
        next: (value) => {
          this.tutors = value;
          this.$tutors.next(true)
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

}
