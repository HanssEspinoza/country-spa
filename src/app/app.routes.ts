import { Routes } from '@angular/router';

import {
  HomeViewComponent,
  AboutViewComponent,
  ContactViewComponent,
} from './shared';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent,
  },
  {
    path: 'about',
    component: AboutViewComponent,
  },
  {
    path: 'contact',
    component: ContactViewComponent,
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.routes').then((c) => c.countriesRoutes),
  },
  {
    path: '**',
    redirectTo: 'countries',
  },
];
