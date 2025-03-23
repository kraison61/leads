"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

interface ReviewProps {
  content: {
    id: string;
    title: string;
    description: string;
    heading: string;
    contentdetail: string;
    review_1: string;
    review_2: string;
    review_3: string;
    review_4: string;
    review_5: string;
    review_6: string;
    review_7: string;
    review_8: string;
    review_9: string;
  };
}

const Review = ({ content }: ReviewProps) => {
  console.log(content);
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What client say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={false}
          //   autoPlay={true}
          //   autoPlaySpeed={3000}
          infinite
          responsive={responsive}
          showDots={true}
        >
          <ReviewCard
            name="Jessy Doe"
            job="Small Business Owners"
            review={content.review_1}
          />
          <ReviewCard
            name="John Doe"
            job="Real Estate Developers"
            review={content.review_2}
          />
          <ReviewCard
            name="Emily Johnson"
            job="Doctors and Dentists"
            review={content.review_3}
          />
          <ReviewCard
            name="Liam Martinez"
            job="Construction Contractors"
            review={content.review_4}
          />
          <ReviewCard
            name="Sophia Anderson"
            job="Lawyers"
            review={content.review_5}
          />
          <ReviewCard
            name="Noah Thompson"
            job="Restaurant Owners"
            review={content.review_6}
          />
          <ReviewCard
            name="Olivia Garcia"
            job="Technology Entrepreneurs"
            review={content.review_7}
          />
          <ReviewCard
            name="Ethan Brown"
            job="Farmers"
            review={content.review_8}
          />
          <ReviewCard
            name="Ava Wilson"
            job="Retail Business Owners"
            review={content.review_9}
          />
        </Carousel>
      </div>
    </div>
  );
};
export default Review;
