import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/i1.png"
            title="Fast and Hassle-Free Approval Process"
            content="We understand that when you need a cash advance, time is of the essence. Our streamlined application process ensures quick approval, often within minutes. With minimal paperwork and no hidden fees, you can get the funds you need without unnecessary delays. Whether it’s for an emergency expense or to bridge a financial gap, we make it easy for you to access cash when you need it most."
            
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/i2.png"
            title="Transparent and Fair Terms"
            content="Unlike other cash advance providers, we believe in complete transparency. Our terms and conditions are clear, with no hidden charges or confusing fine print. We provide upfront information about interest rates, repayment schedules, and any associated fees, so you can make an informed decision. Our goal is to help you manage your finances responsibly without any surprises."
            
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/i3.png"
            title="Flexible Repayment Options"
            content="We know that every financial situation is unique. That’s why we offer flexible repayment plans tailored to your needs. Whether you need a short-term solution or a bit more time to repay, we work with you to create a plan that fits your budget. Our customer-centric approach ensures that you won’t feel overwhelmed by your cash advance repayment."
            
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <WhyChooseCard
            image="/images/i4.png"
            title="Secure and Trusted Service"
            content="Your security is our top priority. We use advanced encryption technology to protect your personal and financial information, ensuring a safe and secure experience. As a trusted cash advance provider, we are committed to maintaining the highest standards of integrity and reliability. You can trust us to handle your financial needs with care and professionalism."
            
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
