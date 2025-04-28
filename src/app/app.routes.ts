import {Routes} from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { 
    path: 'home',
    title: 'Earth',
    component: AppComponent,
  },
  {path:'**',component:AppComponent}
];