import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { getCountry } from "../helpers/getAllCountrys";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CountryCardsProps } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const countryLoader = async ({
  params,
}: {
  params: { pais: string };
}) => {
  const country = await getCountry(params.pais);
  return { country };
};

export const Country = () => {
  const {
    country: [country],
  } = useLoaderData() as CountryCardsProps;
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div className="flex flex-col px-3">
      <Button
        variant="default"
        className="mb-14 mt-8 flex gap-3 self-start bg-element px-7 shadow-md dark:text-white/75"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="size-4" />
        <span>Back</span>
      </Button>
      {navigation.state === "loading" ? (
        <Card className="w-[280px] animate-pulse self-center rounded-md bg-element shadow-md">
          <CardHeader className="bg-slate-700 p-24"></CardHeader>
          <CardContent>
            <div className="my-6 rounded-full bg-slate-700 py-4"></div>
            <div className="flex flex-col gap-4 font-light">
              <div className="flex gap-1 rounded-full bg-slate-700 py-2"></div>
              <div className="flex gap-1 rounded-full bg-slate-700 py-2"></div>
              <div className="flex gap-1 rounded-full bg-slate-700 py-2"></div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="pb-5">
            <img src={country.flags} alt={country.altSpellings} />
          </div>
          <h2 className="text-2xl font-semibold"> {country.official} </h2>
          <div className="flex w-full flex-col gap-4 text-wrap">
            <div className="flex gap-1">
              <h3>Native Name:</h3>
              <span className="dark:text-white/75">{country.nativeName}</span>
            </div>
            <div className="flex gap-1">
              <h3>Population:</h3>
              <span className="dark:text-white/75">{country.population}</span>
            </div>
            <div className="flex gap-1">
              <h3>Region:</h3>
              <span className="dark:text-white/75">{country.region}</span>
            </div>
            <div className="flex gap-1">
              <h3>Sub Region:</h3>
              <span className="dark:text-white/75">{country.subregion}</span>
            </div>
            <div className="flex gap-1">
              <h3>Capital:</h3>
              <span className="dark:text-white/75">{country.capital}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <div className="flex gap-1">
              <h3>Top Level Domain:</h3>
              <span className="dark:text-white/75">{country.tld}</span>
            </div>
            <div className="flex gap-1">
              <h3>Courrencies:</h3>
              <span className="dark:text-white/75">{country.currencies}</span>
            </div>
            <div className="flex gap-1">
              <h3>Languages:</h3>
              <span className="dark:text-white/75">{country.languages}</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-5 pt-6">
            <h3>Border Countries:</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {country.borderCountries.length < 1
                ? "Not found"
                : country.borderCountries.map((country) => (
                    <Button
                      variant="default"
                      className="flex gap-3 bg-element px-5 shadow-md dark:text-white/75"
                      onClick={() => navigate(`/${country.name}`)}
                    >
                      {country.name}
                    </Button>
                  ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
