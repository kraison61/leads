import Link from "next/link";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLine,
  FaMap,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description  */}
          <div>
            {/* Logo  */}
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-3xl md:text-4xl text-pink-700">C</span>ash
              <span className="text-3xl md:text-4xl text-pink-700">A</span>
              dvance
            </h1>
            {/* Description  */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Cash advance loans offer quick, small funds with high fees and
              short repayment, posing significant risks of debt traps.
            </p>
          </div>
          {/* About use Links  */}
          <div className="col-span-2">
            <p className="text-xs text-justify">
              <strong>Disclaimer:</strong> Our website is not an offer or
              solicitation to lend. We do not make any loan or credit decisions
              and are not representatives, brokers or agents of any lender.
              Participating lenders offer loans from $200 up to $5,000. Not all
              lenders can offer you amounts up to $5,000. Our service is not
              available in all states. Submission of a request through this
              website does not guarantee that you will receive a loan offer or
              an offer you’ll be satisfied with. Funds transfer time may vary
              depending on your lender and/or financial institution. If you have
              any questions about your loan, please contact your lеndеr
              directly. Credit checks may be performed with the three reporting
              credit bureaus: Experian, Equifax, and TransUnion. Submission of a
              request means you are authorizing the lenders to check your
              creditworthiness and your personal details. This service is not a
              solicitation for loan products and does not constitute a loan
              offer for any loan products that are prohibited by state law. This
              service is void where prohibited. State Availability: Not all
              lenders from our system operate in all US states. Residents of
              some US states may not be eligible for loan products in accordance
              with their legislation. By selecting your State at the start of
              our loan offer process, you shall be informed of any limitations
              regarding obtaining a loan if you reside in individual US states.
              This website collects personal information and transfers it to its
              third-party partners. The website contains links to third-party
              websites. Accessing them may result in a commission. Please note
              that personal loans should not be treated as financial
              cure-it-all. If you have major budget difficulties, consult
              specialists first.
            </p>
          </div>
          {/* Information Links  */}
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Information
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div> */}
          {/* Contact Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2" />
                Bangkok, Thailand
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                +6661-563-9228
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                24 Hr.
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                oun.cav@gmail.com
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom section  */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            Copyright &copy; 2025 Superprops. All rights reserve{" "}
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Social : </span>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTiktok />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaLine />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
