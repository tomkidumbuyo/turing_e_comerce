import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ApiAjaxService {

  apiUrl = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) { }

  post(url, data) {

    const options = {
      headers: {
        'content-Type': 'application/x-www-form-urlencoded'
      }
    };


    const params = $.param( data );
    return this.httpClient.post(this.apiUrl + url , params, options);

  }


  public get(url) {
    return this.httpClient.get(this.apiUrl + url);
  }

}
