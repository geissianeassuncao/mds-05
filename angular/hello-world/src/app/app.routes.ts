import { Routes } from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {TwoWayDataBindingComponent} from './two-way-data-binding/two-way-data-binding.component';
import {ButtonComponent} from './angular-material/button/button.component';
import {FormsFildComponent} from './angular-material/forms-fild/forms-fild.component';
import {EventBindingComponent} from './event-binding/event-binding.component';

export const routes: Routes = [

  {path: "home", component: HelloWorldComponent},
  {path: "interpolation", component: InterpolationComponent},
  {path: "property-binding", component: PropertyBindingComponent },
  {path: "event-binding", component: EventBindingComponent },
  {path: "two-way-data-binding", component: TwoWayDataBindingComponent},
  {path: "button", component: ButtonComponent},
  {path: "forms-fild", component: FormsFildComponent},

];
