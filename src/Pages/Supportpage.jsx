import React from "react";
import Header from "../components/Header";
import Supportpageherocontent from "../components/supportpageherocontent";
import Supportpagesubherocontext from "../components/Supportpagesubherocontext";
import { FaQ } from "react-icons/fa6";
import FAQ from "../components/Faq";
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
