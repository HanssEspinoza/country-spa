import { Routes } from '@angular/router';

import {
  ByCapitalViewComponent,
  ByCountryViewComponent,
  ByRegionViewComponent,
  CountryViewComponent,
} from './views';

export const countriesRoutes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalViewComponent,
  },
  {
    path: 'by-country',
    component: ByCountryViewComponent,
  },
  {
    path: 'by-region',
    component: ByRegionViewComponent,
  },
  {
    path: 'by/:id',
    component: CountryViewComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];
