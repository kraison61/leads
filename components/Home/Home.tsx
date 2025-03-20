import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeatured from "./AnalyticsFeatured/AnalyticsFeatured";

const Home = () => {
  return (
    <div className="overflow-hidden h-[2000px]">
      <Hero />
      <WhyChoose />
      <AnalyticsFeatured />
    </div>
  );
};

export default Home;
