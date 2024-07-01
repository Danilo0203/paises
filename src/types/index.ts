export interface CountryProps {
  flag: string;
  flags: string;
  altSpellings: string;
  official: string;
  common: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: string;
  languages: string;
  borderCountries: [
    {
      name: string;
    },
  ];
}
export interface CountryCardsProps {
  country: CountryProps;
}
export interface GetCountrys {
  countrys: CountryProps[];
}
export interface GetCountry {
  country: {
    flag: string;
    flags: string;
    altSpellings: string;
    official: string;
    common: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    tld: string;
    currencies: string;
    languages: string;
    borderCountries: [
      {
        name: string;
      },
    ];
  };
}
