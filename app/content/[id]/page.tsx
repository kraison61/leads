import { contentData } from "@/constant/Constant";
import { notFound } from "next/navigation";

//Generate static paths at build time
export function generateStaticParams() {
  return contentData.map((item) => ({
    id: item.id,
  }));
}

//Create SEO-friendly metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const item = contentData.find((item) => item.id === id);
//   const title = item.title.split("|")[0].trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
// console.log(title)



  if (!item) {
    notFound();
  }
  return {
    title: item.title.split("|")[0].trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    description : item.description,
    alternates:{
      canonical:`/content/${id}`
    }
  };
}

const pageContent = async ({params}:{params:{id:string}}) => {
  const {id} = await params

  const content = contentData.find(item=>item.id===id)
console.log(content.title)


  return <div>
    <h1>pageContent : </h1>
    </div>;
};
export default pageContent;
