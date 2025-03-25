import React from "react";
import { contentData } from "@/constant/Constant";

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

const pageContent = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const pageId = contentData.find((p)=>p.id === parseInt())
  console.log("Your id is ", id);
  // console.log(contentData);
  return <div>pageContent : {id}</div>;
};

export default pageContent;
