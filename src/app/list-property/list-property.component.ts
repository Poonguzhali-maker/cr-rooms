import { Component, OnInit } from '@angular/core';
import { AddPropertyDataService } from '../services/add-property-data.service';

@Component({
  selector: 'app-list-property',
  standalone: true,
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.scss'],
})
export class ListPropertyComponent implements OnInit {
  properties: any[] = [];

  constructor(private addPropertyDataService: AddPropertyDataService) {}

  ngOnInit(): void {
    this.properties = this.addPropertyDataService.getAllProperties();
  }
}