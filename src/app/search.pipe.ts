import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(countries, value) {
    if (!value) { return countries; }
    return countries.filter(country => {
      return country.capital.toLowerCase().includes(value.toLowerCase());
    });
  }
}
