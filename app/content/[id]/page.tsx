import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import { contentData } from "@/constant/Constant";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Review from "@/components/Home/Review/Review";
import Offer from "@/components/Home/Offer/Offer";
import { NextSeo } from "next-seo";

const ContentPage = ({ params }: { params: { id: string } }) => {
  const content = contentData.find((c) => c.id === params.id);
  if (!content) {
    return <div>Content not found</div>;
  }
  return (
    <div>
      <NextSeo
        title={content.title} // Dynamic title
        description={content.description} // Dynamic description
        canonical={`http://localhost/content/${content.id}`} // Canonical URL
        openGraph={{
          type: "website",
          url: `http://localhost/content/${content.id}`, // Dynamic URL
          title: content.title, // Dynamic Open Graph title
          description: content.description, // Dynamic Open Graph description
          images: [
            {
              url: content.image, // Dynamic Open Graph image
              alt: content.title, // Dynamic Open Graph image alt text
            },
          ],
        }}
      />
      <Hero content={content} />
      <WhyChoose />
      <Review content={content} />
      <Offer />
    </div>
  );
};

export default ContentPage;
