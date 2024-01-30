import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared';

@Component({
  selector: 'app-by-capital-view',
  standalone: true,
  imports: [SearchBoxComponent],
  template: `
    <h2>Por Capital</h2>
    <hr>

    <div class="row">
      <div class="col">
        <!-- SearchBox -->
        <shared-search-box (onValue)="searchByCapital($event)" placeholder="por capital" />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <!-- TODO: Table -->
      </div>
    </div>
  `,
  styles: ``
})
export class ByCapitalViewComponent {
  searchByCapital(capital: string): void {
    console.log('searchByCapital', capital);
  }
}
