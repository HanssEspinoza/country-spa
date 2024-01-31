import { Country } from "./county.model";

export interface CountryState {
  isLoadingCountries: boolean;
  countries: Country[];
}
