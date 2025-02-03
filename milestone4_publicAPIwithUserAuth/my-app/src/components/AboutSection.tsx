import Navbar2 from "./Navbar2"; // Your existing Navbar component
import { FaPhone, FaMailBulk, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Navbar */}
      <div className="w-full">
        <Navbar2 />
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Left Section (Content) */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-8 space-y-6 text-black">
          {/* About Company Heading */}
          <h6 className="text-[16px] font-bold font-montserrat tracking-wide">
            ABOUT COMPANY
          </h6>

          {/* Main Title */}
          <h2 className="text-[58px] font-bold font-montserrat leading-tight">
            ABOUT US
          </h2>

          {/* Subtext */}
          <p className="text-[20px] font-montserrat leading-relaxed">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>

          {/* Get Quote Button */}
          <button className="bg-[#23A6F0] text-white px-6 py-2 rounded-md font-semibold text-lg max-w-fit">
            Get Quote Now
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto flex items-center justify-center px-6 md:px-0">
          <img
            src="/assets/ShoppingGirl.png" // Ensure correct path
            alt="Shopping Girl"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
