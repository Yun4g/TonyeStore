import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/heroSection";
import FAQSection from "../components/faq";
import Footer from "../components/footer";

function Home() {
  return (
    <main className="relative">

      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <Hero />
      <FAQSection/>

      <div>
        <Footer/>
      </div>
    </main>
  );
}

export default Home;
