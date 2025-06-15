import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPropertyDataService {

  private properties: any[] = [];

  addProperty(property: any) {
  console.log('Adding property to service:', property);
  this.properties.push(property);
}


   getProperty() {
    console.log('Fetching properties:', this.properties);  
    return this.properties;
  }
  
}
