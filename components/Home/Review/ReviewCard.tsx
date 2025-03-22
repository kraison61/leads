import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import DOMPurify from "dompurify";

type Props = {
  name: string;
  review: string;
};

const ReviewCard = ({ name, review }: Props) => {
  const sanitizedHtml = DOMPurify.sanitize(review);
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div>
        <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        {/* Text Content  */}
        <div className="col-span-5 order-2 lg:order-1">
          <p
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]"
          ></p>
          <div className="flex items-center mt-6">
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
          </div>
          <h1 className="text-xl font-semibold mt-8">{name}</h1>
          <p className="mt-2 text-lg text-gray-600 font-medium mb-6">
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
