import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatIconModule, } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  imports: [MatIconModule,RouterLink,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
