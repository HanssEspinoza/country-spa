import { Component, inject } from '@angular/core';
import { CountryService } from '../../services';
import { SearchBoxComponent } from '../../../shared';
import { CountryTableComponent } from '../../components';

@Component({
  selector: 'app-by-region-view',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  template: `
    <h2>Por Region</h2>
    <hr />

    <div class="row">
      <div class="col">
        <!-- SearchBox -->
        <shared-search-box
          (onValue)="searchByRegion($event)"
          placeholder="Por region"
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
export class ByRegionViewComponent {
  countryService = inject(CountryService);

  searchByRegion(term: string): void {
    this.countryService.searchRegion(term);
  }
}
