"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Review/Review";
import Offer from "./Offer/Offer";


import AOS from "aos";
import "aos/dist/aos.css"; // You c
import HowItWork from "./HowItWork/HowItWork";

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 2000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden h-full">
      <Hero />
      <WhyChoose />
      <Review />
      <HowItWork id="how-it-work" />
      <Offer />
    </div>
  );
};

export default Home;
