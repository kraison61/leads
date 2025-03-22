import React from "react";
import Hero from "@/components/Home/Hero/Hero";
import { contentData } from "@/constant/Constant";

interface ContentProps {
  id: string;
  title: string;
  description: string;
  heading: string;
  contentdetail: string;
}

const ContentPage = async ({ params }: { params: { id: string } }) => {
  const content = contentData.find((c) => c.id === params.id);
  if (!content) {
    return <div>Content not found</div>;
  }
  return <div>ContentPage</div>;
};

export default ContentPage;
