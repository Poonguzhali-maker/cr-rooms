import { Component } from '@angular/core';
import{ MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-details',
  standalone:true,
  imports: [MatFormFieldModule,ReactiveFormsModule,MatInputModule,CommonModule],
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent {
  public basicDetailsForm!: FormGroup
  password:string='';

  constructor(private fb:FormBuilder){

    this.basicDetailsForm=this.fb.group({
      propertyName: ['', [Validators.required]],
    propertyDescription:[''],
    
    })
  }

}
