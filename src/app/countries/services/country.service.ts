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
import { Router } from '@angular/router';

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
  #router = inject(Router);

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
          this.#countries.set([]),
          this.#isLoadingCountries.set(false)
        }
      });
  }

  searchCountry(query: string): Subscription {
    this.#isLoadingCountries.set(true);
    return this.#http
      .get<Country[]>(`${this.#apiUrl}name/${query}`)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (resp) => {
          this.#countries.set(resp),
          this.#isLoadingCountries.set(false)
        },
        error: (err) => {
          console.error(err),
          this.#countries.set([]),
          this.#isLoadingCountries.set(false)
        }
      });
  }

  searchRegion(query: string): Subscription {
    this.#isLoadingCountries.set(true);
    return this.#http
      .get<Country[]>(`${this.#apiUrl}region/${query}`)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (resp) => {
          this.#countries.set(resp),
          this.#isLoadingCountries.set(false)
        },
        error: (err) => {
          console.error(err),
          this.#countries.set([]),
          this.#isLoadingCountries.set(false)
        }
      });
  }

  searchCode(query: string): Subscription {
    this.#isLoadingCountries.set(true);
    return this.#http
      .get<Country[]>(`${this.#apiUrl}alpha/${query}`)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (resp) => {
          this.#countries.set(resp),
          this.#isLoadingCountries.set(false)
        },
        error: (err) => {
          console.error(err),
          this.#countries.set([]),
          this.#router.navigateByUrl('/')
          this.#isLoadingCountries.set(false)
        }
      });
  }
}
