import { Component, inject } from '@angular/core';

import { CountryService } from '../../services';
import { SearchBoxComponent } from '../../../shared';
import { CountryTableComponent } from '../../components';

@Component({
  selector: 'app-by-country-view',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  template: `
    <h2>Por País</h2>
    <hr />

    <div class="row">
      <div class="col">
        <!-- SearchBox -->
        <shared-search-box
          (onValue)="searchByCountry($event)"
          placeholder="Por país"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <!-- Table -->
        <hr />
        <country-table
          [countries]="countryService.countriesState().countries"
        />
      </div>
    </div>
  `,
  styles: ``,
})
export class ByCountryViewComponent {
  countryService = inject(CountryService);

  searchByCountry(term: string): void {
    this.countryService.searchCountry(term);
  }
}
