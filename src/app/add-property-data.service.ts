import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AddPropertyDataService {
  // stores added properties in memory//
  private properties: any[] = [];


  //saves new property into the array//
  addProperty(property: any) {
    this.properties.push(property);
  }

  //gives all saved properties to show on a list component//
  getProperty() {
    return this.properties;
  }

}
