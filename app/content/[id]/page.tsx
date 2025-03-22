import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import { contentData } from "@/constant/Constant";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import AnalyticsFeatured from "@/components/Home/AnalyticsFeatured/AnalyticsFeatured";
import Feature from "@/components/Home/Feature/Feature";
import Review from "@/components/Home/Review/Review";
import Price from "@/components/Home/Price/Price";
import Offer from "@/components/Home/Offer/Offer";




const ContentPage = ({ params }: { params: { id: string } }) => {
  const content = contentData.find((c) => c.id === params.id);
  if (!content) {
    return <div>Content not found</div>;
  }
  console.log(content)
  return (
    <div>
      <Hero content={content} />
      <WhyChoose />
      <AnalyticsFeatured />
      <Feature />
      <Review content={content}/>
      <Price />
      <Offer />
    </div>
  );
};

export default ContentPage;
