//this service for ssending data to edit component from addProperty component//

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AddPropertyDataService {
  private apiUrl = 'http://api.dev.kutralamrooms.in/api';
private formData: any;

constructor(private http:HttpClient) {
  console.log('Form submitted');
}

//send form data to backend//
addProperty(data:any): Observable<any> {
  return this.http.post(this.apiUrl, data);
}

//store data for editing //
setFormData(data:any):void{
  this.formData = data;
  console.log();
}

getFormData():any{
  return this.formData??{};
}

  
}