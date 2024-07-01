/* eslint-disable react-refresh/only-export-components */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CountryCardsProps } from "@/types";
import { useNavigate } from "react-router-dom";

export const CardsCountry = ({ country }: CountryCardsProps) => {
  const navigate = useNavigate();
  const handleClick = (countryName: string) => {
    navigate(`/${countryName}`);
  };

  return (
    <>
      <Card
        className="w-[280px] rounded-md bg-element shadow-md"
        onClick={() => handleClick(country.common)}
      >
        <CardHeader className="p-0">
          <img
            src={country.flags}
            alt={country.altSpellings}
            className="w-full rounded-t-md"
          />
        </CardHeader>
        <CardContent>
          <h2 className="py-6 font-semibold">{country.official}</h2>
          <div className="flex flex-col gap-2 font-light">
            <div className="flex gap-1">
              <h3>Population:</h3>
              <span className="text-black/65 dark:text-white/75">
                {country.population}
              </span>
            </div>
            <div className="flex gap-1">
              <h3>Region:</h3>
              <span className="text-black/65 dark:text-white/75">
                {country.region}
              </span>
            </div>
            <div className="flex gap-1">
              <h3>Capital:</h3>
              <span className="text-black/65 dark:text-white/75">
                {country.capital}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
