import { HttpClient } from '@angular/common/http';
import {
  DestroyRef,
  Injectable,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Country, CountryState } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  #apiUrl: string = 'https://restcountries.com/v3.1/';

  countriesState = computed<CountryState>(() => ({
    isLoadingCountries: this.#isLoadingCountries(),
    countries: this.#countries(),
  }));

  #countries = signal<Country[]>([]);
  #isLoadingCountries = signal<boolean>(false);

  #http = inject(HttpClient);
  #destroyRef = inject(DestroyRef);

  searchCapital(query: string): Subscription {
    this.#isLoadingCountries.set(true);
    return this.#http
      .get<Country[]>(`${this.#apiUrl}capital/${query}`)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (resp) => {
          this.#countries.set(resp),
          this.#isLoadingCountries.set(false)
        },
        error: (err) => {
          console.error(err),
          this.#isLoadingCountries.set(false)
        }
      });
  }
}
