import React from "react";
import Header from "../Components/Header";
import Supportpageherocontent from "../Components/supportpageherocontent";
import Supportpagesubherocontext from "../Components/Supportpagesubherocontext";
import { FaQ } from "react-icons/fa6";
import FAQ from "../Components/Faq";
import Call from "../components/Call";

const Supportpage = () => {
  return (
    <main className="supportpage_wrapper">
      <section className="supportpage_container">
        <Header />
        <Supportpageherocontent />
        <Supportpagesubherocontext />

        <FAQ />
        <Call />
      </section>
    </main>
  );
};

export default Supportpage;
