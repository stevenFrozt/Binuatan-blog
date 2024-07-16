import React from "react";
import About from "@/app/about/page";
import Cardinfo from "@/components/custom/Cardinfo";

const Home: React.FC = () => {
  return (
    <main className="px-6 lg:px-52 p-4 min-h-screen">
      {/* LANDING PAGE */}
      <section className="border min-h-[100vh]">
        LANDING AKO
        <About />
      </section>
      {/* PRODUCT GRID show only 6 */}
      <section>
        <Cardinfo />
      </section>
    </main>
  );
};

export default Home;
