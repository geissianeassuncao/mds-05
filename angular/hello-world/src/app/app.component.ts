import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import {ButtonComponent} from './angular-material/button/button.component';
import {FormsFildComponent} from './angular-material/forms-fild/forms-fild.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,
           MatToolbarModule, MatIconModule, MatDividerModule,MatListModule,
           FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'hello-world';

  listaDeTarefas: Array<string> = [
    'Tarefa 1',
    'Tarefa 2',
  ];

  tarefa: string ='';

  public addTarefa(): void {
    this.listaDeTarefas.push(this.tarefa);
    this.tarefa = '';
  }


}
