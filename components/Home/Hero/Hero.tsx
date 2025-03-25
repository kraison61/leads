import React from "react";
import Image from "next/image";

interface HeroProps {
  content?: {
    id: string;
    title?: string;
    description?: string;
    heading?: string;
    contentdetail?: string;
    review_1?: string;
    review_2?: string;
    review_3?: string;
    review_4?: string;
    review_5?: string;
    review_6?: string;
    review_7?: string;
    review_8?: string;
    review_9?: string;
  };
}




const Hero = ({ content }: HeroProps) => {
  const {
    id = "1",
    title = "Cash Advances: Quick Solutions for Financial Emergencies",
    description = "Cash advances and payday loans can help in emergencies, but they come with risks. Learn the key differences, fees, and how to use them responsibly in this comprehensive guide.",
    heading = "The Ultimate Guide to Cash Advances: Everything You Need to Know",
    contentdetail = "In today’s fast-paced world, financial emergencies can arise unexpectedly. Whether it’s an unexpected medical bill, car repair, or a sudden job loss, having access to quick cash can be a lifesaver. This is where cash advances come into play. In this comprehensive guide, we’ll explore everything you need to know about cash advances, including how they work, their benefits, drawbacks, and alternatives. We’ll also dive into related keywords like payday loans, short-term loans, and emergency funding to give you a complete understanding of your options.",
  } = content || {};
  const htmlString = contentdetail;

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content  */}
          <div>
            {/* Heading  */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              {title}
            </h1>

            {/* Description  */}
            <p
              dangerouslySetInnerHTML={{ __html: htmlString }}
              className="text-gray-700"
            ></p>
          </div>

          {/* Image  */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="hidden lg:block"
          >
            <Image src="/images/hero.png" alt="hero" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
