"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import { contentData } from "@/constant/Constant";

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
  content?: {
    id?: string;
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
  
  const {
    title = `Cash Advances: Quick Solutions for Financial Emergencies`,
    description = `Cash advances and payday loans can help in emergencies, but they come with risks. Learn the key differences, fees, and how to use them responsibly in this comprehensive guide.`,
    heading = `The Ultimate Guide to Cash Advances: Everything You Need to Know`,
    contentdetail = `In today’s fast-paced world, financial emergencies can arise unexpectedly. Whether it’s an unexpected medical bill, car repair, or a sudden job loss, having access to quick cash can be a lifesaver. This is where cash advances come into play. In this comprehensive guide, we’ll explore everything you need to know about cash advances, including how they work, their benefits, drawbacks, and alternatives. We’ll also dive into related keywords like payday loans, short-term loans, and emergency funding to give you a complete understanding of your options.`,
    review_1 = `Understanding Cash Advances: A Comprehensive Guide

When unexpected expenses arise, many individuals find themselves in need of quick financial solutions. A cash advance can be a viable option for those seeking short-term financial assistance. This guide will help you understand what a cash advance is, how it works, and what to consider before moving forward. If you’re exploring your options, you can get started now to learn more about how this financial tool might work for you.`,
    review_2 = `What is a Cash Advance?
A cash advance is a short-term loan designed to provide immediate access to funds. It is typically used to cover urgent expenses, such as medical bills, car repairs, or other unforeseen costs. Unlike traditional loans, cash advances are often processed quickly, allowing borrowers to receive funds in a timely manner.

Cash advances can be obtained through various channels, including credit card cash advances, payday loans, or online lending platforms. Each option has its own terms and conditions, so it’s important to understand the specifics before proceeding.`,
    review_3 = `How Does a Cash Advance Work?
When you request a cash advance, you are essentially borrowing a small amount of money that you agree to repay within a short period, usually by your next payday. The process is straightforward:

Request a Loan: You provide basic information about yourself and your financial needs. This step is simple and can often be completed online.

Receive a Decision: Once your request is submitted, you may receive a decision within minutes. If approved, the terms of the loan, including the repayment schedule and fees, will be presented to you.

Receive Funds: If you accept the terms, the funds can be deposited into your account as soon as the same business day, depending on the lender and your bank’s processing times.

Repay the Loan: Repayment is typically due on your next payday or within a few weeks. Be sure to review the repayment terms carefully to avoid any surprises.`,
    review_4 = `Key Considerations Before Requesting a Cash Advance
While a cash advance can provide quick access to funds, it’s important to weigh the pros and cons before moving forward. Here are some factors to keep in mind:

Fees and Interest Rates: Cash advances often come with higher fees and interest rates compared to traditional loans. Be sure to review the costs associated with the loan to ensure it fits within your budget.

Repayment Terms: Short repayment periods can make it challenging to repay the loan on time. If you’re unable to repay the loan by the due date, additional fees may apply.

Impact on Credit: While some lenders may not require a credit check, failing to repay the loan on time could negatively impact your credit score.`,
    review_5 = `Alternatives: Before requesting a cash advance, consider other options, such as borrowing from friends or family, negotiating payment plans with creditors, or exploring personal loans with longer repayment terms.

Who Can Benefit from a Cash Advance?
Cash advances are designed for individuals who need immediate access to funds and have limited options for traditional financing. Here are some scenarios where a cash advance might be a suitable solution:

Emergency Expenses: If you’re facing an unexpected expense, such as a medical bill or car repair, a cash advance can help you cover the cost quickly.

Bad Credit: If you have less-than-perfect credit, you may still be able to request a cash advance. Many lenders in the network consider factors beyond your credit score when making a decision.

Short-Term Needs: If you need a small amount of money for a short period, a cash advance can provide the funds you need without a long-term commitment.`,
    review_6 = `How to Get Started with a Cash Advance
If you’ve decided that a cash advance is the right option for you, the process is simple and straightforward. Here’s how you can start now:

Provide Basic Information: Begin by filling out a short form with your personal and financial details. This information is used to match you with one of several lenders in the network.

Review Your Options: Once your request is submitted, you’ll receive information about potential loan offers. Take the time to review the terms and conditions carefully.

Accept the Terms: If you find an offer that works for you, accept the terms and proceed with the loan. Funds can be deposited into your account as fast as the same business day.

Repay the Loan: Be sure to repay the loan according to the agreed-upon terms to avoid additional fees or penalties.`,
    review_7 = `Why Choose a Cash Advance?
A cash advance can be a convenient and accessible option for those in need of quick financial assistance. Here are some reasons why individuals choose this option:

Speed: The application process is fast, and funds can be available as soon as the same business day.

Accessibility: Even if you have bad credit, you may still be able to request a cash advance.

Convenience: The entire process can be completed online, making it easy to request a loan from the comfort of your home.`,
    review_8 = `Final Thoughts
A cash advance can be a helpful tool for managing short-term financial needs, but it’s important to approach it with caution. Be sure to review the terms and conditions carefully, and consider whether this option is the best fit for your situation. If you’re ready to explore your options, you can get started now and take the first step toward securing the funds you need.`,
    review_9 = `Remember, a cash advance is just one of many financial tools available to you. Take the time to explore all your options and make an informed decision that aligns with your financial goals.

By understanding how cash advances work and what to consider before requesting one, you can make a more informed decision about whether this option is right for you. If you’re ready to take the next step, start now and see how a cash advance might help you manage your financial needs.`,
  } = content || {};

  const reviews = [
    { name: "Jessy Doe", job: "Small Business Owners", review: review_1 },
    { name: "John Doe", job: "Real Estate Developers", review: review_2 },
    { name: "Emily Johnson", job: "Doctors and Dentists", review: review_3 },
    { name: "Liam Martinez", job: "Construction Contractors", review: review_4 },
    { name: "Sophia Anderson", job: "Lawyers", review: review_5 },
    { name: "Noah Thompson", job: "Restaurant Owners", review: review_6 },
    { name: "Olivia Garcia", job: "Technology Entrepreneurs", review: review_7 },
    { name: "Ethan Brown", job: "Farmers", review: review_8 },
    { name: "Ava Wilson", job: "Retail Business Owners", review: review_9 },
  ];
  
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What client say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
      <Carousel
          arrows={false}
          infinite
          responsive={responsive}
          showDots={true}
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              job={review.job}
              review={review.review}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Review;
