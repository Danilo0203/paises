import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";

export const Search = () => {
  const { q } = useLoaderData() as { q: string };
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
  const submit = useSubmit();

  return (
    <>
      <Form id="search-form" role="search">
        <Label
          htmlFor="search"
          className="mt-6 flex items-center justify-center rounded-sm bg-element pl-8 shadow-md"
        >
          <SearchIcon className="mr-4 size-4" />
          <Input
            id="q"
            aria-label="Search country"
            type="search"
            name="q"
            placeholder="Search for a country..."
            className="placeholder:text-text/s bg-element placeholder:font-light"
            defaultValue={q}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
        </Label>
      </Form>
    </>
  );
};
