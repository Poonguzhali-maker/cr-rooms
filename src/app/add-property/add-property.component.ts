import { Component } from '@angular/core';
import { AddPropertyFormComponent } from '../add-property-form/add-property-form.component';
import { AddPropertyDataService } from '../add-property-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-property',
  imports: [AddPropertyFormComponent],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
  standalone: true,
})
export class AddPropertyComponent {
  constructor(
    private addPropertyDataService: AddPropertyDataService,
    private router: Router
  ) {}

  onAdd(event: any) {
    console.log('Form submitted:', event); 
    this.addPropertyDataService.addProperty(event);
    this.router.navigate(['/list-property']);
  }

  
}
