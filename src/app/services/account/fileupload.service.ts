import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(
    public httpClient: HttpClient
  ) { }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'http://develop.config.l-shop-service.local/develop.l-shop-service.local/media';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    formData.append('filepath', '/var/www/tests/_output');

    return this.httpClient
      .post(endpoint, formData, {  })
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any>('upload', []))
      );
  }

  private log(msg): void {
    console.log(msg);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
