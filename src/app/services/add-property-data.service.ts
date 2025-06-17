//this service for ssending data to edit component from addProperty component//

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AddPropertyDataService {
  private apiUrl = 'http://api.dev.kutralamrooms.in/api';
private properties: any[]=[];



constructor(private http: HttpClient) {

}

  // Store property in the in-memory array
  addPropertyToList(properties: any) {
    this.properties.push(properties);
  }

  // Get all properties
  getAllProperties() {
    return this.properties ??{};
  }

  // (Optional) Send to backend as before
  addProperty(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  
}