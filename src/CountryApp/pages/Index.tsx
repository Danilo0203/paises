import { Header } from "@components/Header";

import { Outlet } from "react-router-dom";

export const Index = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-8 px-4 pb-8">
        <Outlet />
      </section>
    </>
  );
};
