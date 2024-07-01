import { createBrowserRouter } from "react-router-dom";
import { Index } from "@pages/Index";
import { loaderCountry } from "@components/ListCountry";
import { Country, countryLoader } from "@pages/Country";
import { AllCountrys } from "../pages/AllCountrys";

export const Route = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      children: [
        {
          index: true,
          element: <AllCountrys />,
          loader: loaderCountry,
        },
        {
          path: ":pais",
          element: <Country />,
          loader: countryLoader,
        },
      ],
    },
  ],
  { basename: "/country" },
);
