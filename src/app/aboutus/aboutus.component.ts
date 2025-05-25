import { Component } from '@angular/core';
import { BranchesComponent } from './branches/branches.component';

@Component({
  selector: 'app-aboutus',
  imports: [BranchesComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
parentMessage="Welcome";
handleBranchUpdate(updateBranch:string){

  console.log("Received from child:", updateBranch);
}
}
