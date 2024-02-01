import { Component, Input, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { CountryService } from '../../services';
import { Country } from '../../models';

@Component({
  selector: 'app-country-view',
  standalone: true,
  imports: [DecimalPipe],
  template: `
    <section>
      <div class="row">
        <div class="col-12">
          <h2>
            País: <strong>{{ country().name.common }}</strong>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <h3>Bandera</h3>
          <img
            [src]="country().flags.svg"
            [alt]="country().flags.alt"
            class="img-thumbnail"
          />
        </div>
        <div class="col">
          <h3>Información</h3>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Población:</strong> {{ country().population | number }}
            </li>
            <li class="list-group-item">
              <strong>Código:</strong> {{ country().cca3 }}
            </li>
          </ul>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <h3>Traducciones</h3>

          <div class="d-flex flex-wrap">
            <span class="badge bg-primary m-1">{{
              country().translations['ara'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['bre'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['ces'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['fra'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['spa'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['rus'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['pol'].common
            }}</span>
            <span class="badge bg-primary m-1">{{
              country().translations['por'].common
            }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class CountryViewComponent {
  // Version 16+
  @Input()
  id!: string;

  country = computed<Country>(
    () => this.countryService.countriesState().countries[0]
  );

  // Version 15-
  // #activatedRoute = inject(ActivatedRoute);

  // constructor() {
  //   this.#activatedRoute.params.subscribe(params => {
  //     this.id = params['id'];
  //   });
  // }

  countryService = inject(CountryService);

  ngOnInit() {
    this.countryService.searchCode(this.id);
  }
}
