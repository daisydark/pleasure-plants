import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { Plant } from "./interfaces/plant";

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private plantsUrl = 'http://develop.config.l-shop-service.local/plants.json';

  constructor(
    private http: HttpClient
  ) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantsUrl)
      .pipe(
        catchError(this.handleError<Plant[]>('getPlants', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`);
      console.error(error);
      return of(result as T);
    }
  }
}
