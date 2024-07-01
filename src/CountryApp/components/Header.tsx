import { ModeToggle } from "@/components/ModeToggle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-element px-4 py-7 shadow-md">
      <h1 className="font-semibold">Where in the world?</h1>
      <ModeToggle />
    </header>
  );
};
