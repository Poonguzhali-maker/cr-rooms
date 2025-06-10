import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';






@Component({
  selector: 'app-list-property',
  imports: [MatButtonModule,RouterModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './list-property.component.html',
  styleUrl: './list-property.component.scss'
})
export class ListPropertyComponent {


}
