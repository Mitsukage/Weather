import { Country } from '../models/country.model';

export interface State {
  countryPage: {
    countries: Country[]
  };
}
