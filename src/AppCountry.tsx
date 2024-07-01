import { RouterProvider } from "react-router-dom";
import { Route } from "@routes/Route";
import { ThemeProvider } from "@/components/theme-provider";

export const AppCountry = () => {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <RouterProvider router={Route} />
    </ThemeProvider>
  );
};
