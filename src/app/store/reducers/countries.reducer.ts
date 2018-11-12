import {Actions, CountryActions} from '../actions/countries.action';
import {Country} from '../../models/country.model';


const InitialState = {
  countries: [
    new Country('Albania', 'Tirana', 20, 'sun', 'neutral'),
    new Country('Andorra', 'Andorra la Vella', 20, 'sun', 'neutral'),
    new Country('Armenia', 'Yerevan', 20, 'sun', 'neutral'),
    new Country('Austria', 'Vienna', 20, 'sun', 'neutral'),
    new Country('Azerbaijan', 'Baku', 20, 'sun', 'neutral'),
    new Country('Belarus', 'Minsk', 20, 'sun', 'neutral'),
    new Country('Belgium', 'Brussels', 20, 'sun', 'neutral'),
    new Country('Bosnia and Herzegovina', 'Sarajevo', 20, 'sun', 'neutral'),
    new Country('Bulgaria', 'Sofia', 20, 'sun', 'neutral'),
    new Country('Croatia', 'Zagreb', 20, 'sun', 'neutral'),
    new Country('Czech Republic', 'Prague', 20, 'sun', 'neutral'),
    new Country('Denmark', 'Copenhagen', 20, 'sun', 'neutral'),
    new Country('Finland', 'Helsinki', 20, 'sun', 'neutral'),
    new Country('France', 'Paris', 20, 'sun', 'neutral'),
    new Country('Georgia', 'Tbilisi', 20, 'sun', 'neutral'),
    new Country('Germany', 'Berlin', 20, 'sun', 'neutral'),
    new Country('Greece', 'Athens', 20, 'sun', 'neutral'),
    new Country('Hungary', 'Budapest', 20, 'sun', 'neutral'),
    new Country('Iceland', 'Reykjavik', 20, 'sun', 'neutral'),
    new Country('Ireland', 'Dublin', 20, 'sun', 'neutral'),
    new Country('Italy', 'Rome', 20, 'sun', 'neutral'),
    new Country('Kazakhstan', 'Astana', 20, 'sun', 'neutral'),
    new Country('Latvia', 'Riga', 20, 'sun', 'neutral'),
    new Country('Liechtenstein', 'Vaduz', 20, 'sun', 'neutral'),
    new Country('Lithuania', 'Vilnius', 20, 'sun', 'neutral'),
    new Country('Macedonia', 'Skopje', 20, 'sun', 'neutral'),
    new Country('Malta', 'Valletta', 20, 'sun', 'neutral'),
    new Country('Moldova', 'Chisinau', 20, 'sun', 'neutral'),
    new Country('Monaco', 'Monaco', 20, 'sun', 'neutral'),
    new Country('Montenegro', 'Podgorica', 20, 'sun', 'neutral'),
    new Country('Netherlands', 'Amsterdam', 20, 'sun', 'neutral'),
    new Country('Norway', 'Oslo', 20, 'sun', 'neutral'),
    new Country('Poland', 'Warsaw', 20, 'sun', 'neutral'),
    new Country('Portugal', 'Lisbon', 20, 'sun', 'neutral'),
    new Country('Romania', 'Bucharest', 20, 'sun', 'neutral'),
    new Country('Russia', 'Moscow', 20, 'sun', 'neutral'),
    new Country('San Marino', 'San Marino', 20, 'sun', 'neutral'),
    new Country('Serbia', 'Belgrade', 20, 'sun', 'neutral'),
    new Country('Slovakia', 'Bratislava', 20, 'sun', 'neutral'),
    new Country('Slovenia', 'Ljubljana', 20, 'sun', 'neutral'),
    new Country('Spain', 'Madrid', 20, 'sun', 'neutral'),
    new Country('Sweden', 'Stockholm', 20, 'sun', 'neutral'),
    new Country('Switzerland', 'Bern', 20, 'sun', 'neutral'),
    new Country('Sweden', 'Stockholm', 20, 'sun', 'neutral'),
    new Country('Turkey', 'Ankara', 20, 'sun', 'neutral'),
    new Country('Ukraine', 'Kyiv', 20, 'sun', 'neutral'),
    new Country('United Kingdom', 'London', 20, 'sun', 'neutral'),
    new Country('Vatican City', 'Vatican City', 20, 'sun', 'neutral')
  ]
};

export function countryReducer(state = InitialState,
                               action: CountryActions) {
  switch (action.type) {
    case Actions.LOAD_COUNTRIES: {
      localStorage.getItem('countries') ? state.countries = JSON.parse(localStorage.getItem('countries')) : localStorage.setItem('countries', JSON.stringify([...state.countries]));
      return {
        ...state,
        countries: [...state.countries]
      };
    }
    case Actions.REFRESH_COUNTRIES: {
      state.countries.forEach(el => {
        el.status = 'neutral';
      });
      localStorage.setItem('countries', JSON.stringify([...state.countries]));
      return {
        ...state,
        countries: [...state.countries]
      };
    }
    case Actions.ADD_COUNTRY: {
      const newArr = [...state.countries, action.payload];
      localStorage.setItem('countries', JSON.stringify(newArr));
      return {
        ...state,
        countries: newArr
      };
    }
    case Actions.UPDATE_COUNTRY: {
      state.countries[action.index].status = action.status;
      localStorage.setItem('countries', JSON.stringify([...state.countries]));
      return {
        ...state,
        countries: [...state.countries]
      };
    }
    case Actions.DELETE_COUNTRY: {
      const newArr = [...state.countries.filter((c) => c.capital !== action.payload.capital)];
      localStorage.setItem('countries', JSON.stringify(newArr));
      return {
        ...state,
        countries: newArr
      };
    }
    default:
      return state;
  }
}
