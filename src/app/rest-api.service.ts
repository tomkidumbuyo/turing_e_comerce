import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

declare var $: any;

@Injectable({
  providedIn: 'root'
});

export class RestApiService {

  // Define API
  apiURL = '/api/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  // Http Options
  authHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  constructor(
    private http: HttpClient,
  ) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    if (authData && authData !== 'null') {
      this.authHttpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + authData.accessToken
        })
      };
    }
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/



  // HttpClient API get() method
  get(url) {
    return this.http.get<any>(this.apiURL + url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAuth(url) {
    return this.http.get<any>(this.apiURL + url, this.authHttpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method
  post(url, data) {
    return this.http.post<any>(this.apiURL + url, $.param(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  postAuth(url, data) {
    return this.http.post<any>(this.apiURL + url, $.param(data), this.authHttpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method
  put(url, data) {
    return this.http.put<any>(this.apiURL + url, $.param(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  putAuth(url, data) {
    return this.http.put<any>(this.apiURL + url, $.param(data), this.authHttpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method
  delete(url) {
    return this.http.delete<any>(this.apiURL + url, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteAuth(url) {
    return this.http.delete<any>(this.apiURL + url, this.authHttpOptions)
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
     console.log(errorMessage);
     console.log(error);
     window.alert(error.error.message);
     return throwError(errorMessage);
  }

}
