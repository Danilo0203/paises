export const getAllCountrys = async () => {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const res = await data.json();
    return res.map((r) => ({
      flag: r.flag,
      flags: r.flags.svg,
      altSpellings: r.altSpellings,
      official: r.name.official,
      common: r.name.common,
      population: r.population,
      region: r.region,
      subregion: r.subregion,
      capital: r.capital,
      tld: r.tld,
    }));
  } catch (error) {
    console.log(error);
  }
};
const borderCountrys = async (borderCountrys: string[]) => {
  try {
    const borderCountriesData = await Promise.all(
      borderCountrys.map(async (country) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${country}`,
        );
        const [res] = await response.json();
        return {
          name: res.name.common,
        };
      }),
    );
    return borderCountriesData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCountry = async (name: string) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error("Country not found");
    }
    const res = await response.json();
    console.log(res);

    // Procesar cada país en la respuesta
    const countries = await Promise.all(
      res.map(async (country) => {
        // Acceder a la propiedad 'official' sin conocer la clave exacta
        let officialNativeName = "";
        if (country.name.nativeName) {
          const nativeNames = Object.values(country.name.nativeName);
          if (nativeNames.length > 0) {
            officialNativeName = nativeNames[0].official;
          }
        }

        let officialcurrencies = "";
        if (country.currencies) {
          const currencies = Object.values(country.currencies);
          console.log(currencies);
          if (currencies.length > 0) {
            officialcurrencies = currencies[0].name;
          }
        }

        const langs = country.languages;
        const dataLang = [];
        for (const key in langs) {
          dataLang.push(langs[key]);
        }

        const borders = country.borders
          ? await borderCountrys(country.borders)
          : [];

        return {
          flag: country.flag,
          flags: country.flags.svg,
          altSpellings: country.altSpellings,
          official: country.name.official,
          common: country.name.common,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          tld: country.tld,
          currencies: officialcurrencies,
          languages: dataLang.join(", "),
          borderCountries: borders,
          nativeName: officialNativeName,
        };
      }),
    );

    return countries;
  } catch (error) {
    if (error.message === "Country not found") {
      return { error: "Country not found" };
    }
    console.error("Error fetching country data:", error);
    throw error;
  }
};
