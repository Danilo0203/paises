import { ListCountry } from "@components/ListCountry";
import { Search } from "@components/Search";
import { SelectRegion } from "@components/SelectRegion";

export const AllCountrys = () => {
  return (
    <>
      <Search />
      <SelectRegion />
      <ListCountry />
    </>
  );
};
