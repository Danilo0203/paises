/* eslint-disable react-refresh/only-export-components */
import { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PaginationContry } from "./PaginationContry";
import { CardsCountry } from "./CardsCountry";
import { getAllCountrys, getCountry } from "../helpers/getAllCountrys";

import { CountryProps, GetCountrys } from "@/types";

export async function loaderCountry({ request }: { request: { url: string } }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  let countrys = [];
  let error = null;

  if (!q || q.trim().length === 0) {
    countrys = await getAllCountrys();
  } else {
    const countryResult = await getCountry(q);
    if (countryResult.error) {
      error = countryResult.error;
    } else {
      countrys = countryResult;
    }
  }

  return { countrys, q, error };
}

export const ListCountry = () => {
  const { countrys, error, q } = useLoaderData() as GetCountrys & {
    error?: string;
    q?: string;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const items = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return countrys.slice(start, end);
  }, [currentPage, countrys, rowsPerPage]);

  return (
    <>
      {error ? (
        <div className="text-balance text-center text-2xl font-semibold text-red-500">
          The country does not exist: {q}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-y-8 self-center">
            {items.map((country: CountryProps) => (
              <CardsCountry key={country.flag} country={country} />
            ))}
          </div>
          <PaginationContry
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            numCountrys={countrys.length}
          />
        </>
      )}
    </>
  );
};
