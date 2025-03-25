

import React from "react";
import { contentData } from "@/constant/Constant"; // Assuming ContentItem type is defined in Constant.ts
import Hero from "@/components/Home/Hero/Hero";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return contentData.map((content) => ({
    id: content.id.toString(),
  }));
}

interface PageContentProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({params,}:{params:{id:string}}):Promise<Metadata>{
const post = contentData.find((p)=>p.id === params.id);
if(!post){
  return{
    title:'Post not Found',
    description:'The request post was not found.'
  }
}
return{
  title:post.title,
  description:post.description.substring(0,150)
}


}

const PageContent = ({ params }: PageContentProps) => {
  const pageId: ContentItem | undefined = contentData.find(
    (pageItem) => pageItem.id.toString() === params.id
  );

  if (!pageId) {
    return <div>Content Not Found</div>; // Or redirect, or some other error handling.
  }

  return (
    <div>
      <Hero content={pageId} />
    </div>
  );
};

export default PageContent;