
import { Component } from '@angular/core';
import { AddPropertyFormComponent } from '../../add-property-form/add-property-form.component';

@Component({
  selector: 'app-edit-property',
  imports: [AddPropertyFormComponent], 
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent {
  propertyToEdit = {propertyName: 'Sample Name',
    propertyDescription: 'Sample Description',
    propertyType: 'Apartment',
    cityName: 'Chennai',
    pincode: '600001',
    addressLine1: '123 Main St',
    addressLine2: 'Suite 4B',
    Latitude: '13.0827',
    Longitude: '80.2707'}; 

  onEdit(updatedProperty: any) {
    
    console.log('Edited property:', updatedProperty);
  }
}