import { Country } from "./county.model";

export interface CountryState {
  isLoading: boolean;
  countries: Country[];
}
