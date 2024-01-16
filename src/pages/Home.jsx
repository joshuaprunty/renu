import React from "react";
import Hero from "../components/HomePage/Hero";
import Secondary from "../components/HomePage/Secondary";
import Ternary from "../components/HomePage/Ternary";
import Quaternary from "../components/HomePage/Quaternary";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Secondary />
      <Ternary />
      <Quaternary />
      <Footer />
    </>
  );
}

export default Home;
