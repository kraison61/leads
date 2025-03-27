import { contentData } from "@/constant/Constant";

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

  return {
    title: item.title.split("|")[0].trim(),
  };
}

const pageContent = () => {
  return <div>pageContent</div>;
};
export default pageContent;
