import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }



  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, body) {
    const URL = environment.baseURL + url;
    const Data = new FormData();
    
    // Append the Data
    for (const key in body) {
      if (body.hasOwnProperty(key)) {
        Data.append(key, body[key])
      }
    }

    return this.http.post(URL, Data);
  }
}
