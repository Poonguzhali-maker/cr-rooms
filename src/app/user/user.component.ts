import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatIconModule, } from '@angular/material/icon';
import { AddUsersComponent } from "./add-users/add-users.component";
import { ListUsersComponent } from "./list-users/list-users.component";

@Component({
  selector: 'app-user',
  imports: [MatIconModule, RouterLink, RouterOutlet, AddUsersComponent, ListUsersComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
