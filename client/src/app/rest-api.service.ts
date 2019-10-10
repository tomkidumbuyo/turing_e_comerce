import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Http Options
  authHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method
  get(url) {
    return this.http.get(this.apiURL + url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method
  post(url, data) {
    return this.http.post(this.apiURL + url, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method
  put(url, data) {
    return this.http.put(this.apiURL + url, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method
  delete(url) {
    return this.http.delete(this.apiURL + url, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(error);
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
