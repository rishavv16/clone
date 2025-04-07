import React from "react";
import Header from "./common/header/Header";
import HeroSection from "./common/navbar/HeroSection";
import ServiceSection from "./common/servicesection/ServiceSection";
import IndustriesSection from "./common/industrailsection/IndustriesSection";
import TestnomialSection from "./common/testnomials/TestnomialSection";
import ManagementSection from "./common/management/ManagementSection";
import QuoteSection from "./common/Quotesection/QuoteSection";
import NewsSection from "./common/newsection/NewsSection";
import Footer from "./common/footer/Footer";
import FooterSection from "./common/footersection/FooterSection";
import NavbarSec from "./common/navbarsection/NavbarSec";

const App = () => {
  return (
    <>
      <Header />
      <NavbarSec/>
      <HeroSection />
      <ServiceSection />
      <IndustriesSection />
      <TestnomialSection />
      <ManagementSection />
      <QuoteSection />
      <NewsSection />
      <Footer />
      <FooterSection />
    </>
  );
};

export default App;
