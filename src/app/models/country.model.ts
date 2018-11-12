export class Country {
  constructor(
  public name: string,
  public capital: string,
  public temp: number,
  public condition: string,
  public status: string,
  ) {}
}

export interface Countries {
  countries: Country[];
}
