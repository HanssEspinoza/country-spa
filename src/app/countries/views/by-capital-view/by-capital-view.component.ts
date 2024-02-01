import { Component, inject } from '@angular/core';

import { SearchBoxComponent } from '../../../shared';
import { CountryService } from '../../services';
import { CountryTableComponent } from '../../components';

@Component({
  selector: 'app-by-capital-view',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  template: `
    <h2>Por Capital</h2>
    <hr />

    <div class="row">
      <div class="col">
        <!-- SearchBox -->
        <shared-search-box
          (onValue)="searchByCapital($event)"
          placeholder="Por capital"
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
export class ByCapitalViewComponent {
  countryService = inject(CountryService);

  searchByCapital(term: string): void {
    this.countryService.searchCapital(term);
  }
}
