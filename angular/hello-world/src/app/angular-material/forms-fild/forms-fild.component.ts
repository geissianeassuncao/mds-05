import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-forms-fild',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './forms-fild.component.html',
  styleUrl: './forms-fild.component.scss'
})
export class FormsFildComponent {

}
