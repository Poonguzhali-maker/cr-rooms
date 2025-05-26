import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from '../aboutus.component';


@Component({
  selector: 'app-branches',
  imports: [FormsModule, ],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent  {
//string interpolation//
  name: string='Branch Details';
//eventBinding//
  enteredBranch:string='Nellai';
  managerName: string='';
  branchCode: string='1234';


@Input() branchMessage:string='';

 @Output() branchUpdated = new EventEmitter<string>(); 

  constructor() {}

  ngOnInit() {}
//method name as updateBranch is declared with the 'this' instance with the 'name' property
  updateBranch(){
    this.name='value';

    this.branchUpdated.emit(this.enteredBranch);



    
  }




}
