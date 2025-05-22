import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-sponsors',
  imports: [],
  templateUrl: './add-sponsors.component.html',
  styleUrl: './add-sponsors.component.scss',
})
export class AddSponsorsComponent {
  @Input() parentMessage: string = '';

  @Output() sponsorAdded = new EventEmitter<string>();

  sponsorName: string = '';

  addSponsor() {
    this.sponsorAdded.emit(this.sponsorName);
    this.sponsorName = '';

  }
}
