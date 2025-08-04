import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
