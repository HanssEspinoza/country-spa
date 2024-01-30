import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { Country } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  #apiUrl:string = 'https://restcountries.com/v3.1/';

  countriesState = computed(() => ({
    isLoading: this.#isLoadingCountries(),
    countries: this.#countries(),
  }));

  #countries = signal<Country[]>([]);
  #isLoadingCountries = signal<boolean>(false);

  #http = inject(HttpClient);

  searchCapital(query: string): Subscription {
    this.#isLoadingCountries.set(true);
    return this.#http.get<Country[]>(`${this.#apiUrl}capital/${query}`)
      .subscribe({
        next: (resp) => {
          this.#countries.set(resp);
          this.#isLoadingCountries.set(false);
        },
        error: (err) => {
          console.error(err);
          this.#isLoadingCountries.set(false);
        },
      });
  }
}
