import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import{MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, RouterModule, RouterLink, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cr-rooms';
}
