
import { Component } from '@angular/core';
import { AddPropertyFormComponent } from '../../add-property-form/add-property-form.component';

@Component({
  selector: 'app-edit-property',
  imports: [AddPropertyFormComponent], 
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent {
  propertyToEdit = {}; 

  onEdit(updatedProperty: any) {
    // Handle the updated property form data here
    // e.g., call a service to update the property on the backend
    console.log('Edited property:', updatedProperty);
  }
}