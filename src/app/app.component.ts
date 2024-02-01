import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent, SidebarComponent } from './shared';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './countries/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet, LoadingComponent],
  template: `
    @if(countryService.countriesState().isLoadingCountries) {
    <shared-loading />
    }
    <div class="container">
      <div class="row mt-4">
        <div class="col-3">
          <!-- Sidebar -->
          <shared-sidebar />
        </div>
        <div class="col">
          <!-- Pages -->
          <router-outlet />
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  countryService = inject(CountryService);
}
