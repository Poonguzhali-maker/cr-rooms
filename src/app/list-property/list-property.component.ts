import { Component, OnInit } from '@angular/core';
import { AddPropertyDataService } from '../add-property-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss'],
})
export class ListPropertyComponent implements OnInit {
  properties: any[] = [];

  constructor(private addPropertyDataService: AddPropertyDataService) {}

  ngOnInit(): void {
    this.properties = this.addPropertyDataService.getProperty();
  console.log('Loaded properties:',this.properties);
  }
}
