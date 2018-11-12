import {Action} from '@ngrx/store';
import {Country} from '../../models/country.model';

export namespace Actions {
  export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
  export const REFRESH_COUNTRIES = 'REFRESH_COUNTRIES';
  export const ADD_COUNTRY = 'ADD_COUNTRY';
  export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
  export const DELETE_COUNTRY = 'DELETE_COUNTRY';
}

export class LoadCountries implements Action {
  readonly type = Actions.LOAD_COUNTRIES;

  constructor () {}
}

export class RefreshCountries implements Action {
  readonly type = Actions.REFRESH_COUNTRIES;

  constructor () {}
}

export class AddCountry implements Action {
  readonly type = Actions.ADD_COUNTRY;

  constructor (public payload: Country) {}
}

export class UpdateCountry implements Action {
  readonly type = Actions.UPDATE_COUNTRY;

  constructor (public status: string, public index: number) {}
}

export class DeleteCountry implements Action {
  readonly type = Actions.DELETE_COUNTRY;

  constructor (public payload: Country) {}
}

export type CountryActions = LoadCountries | RefreshCountries | AddCountry | UpdateCountry | DeleteCountry;
