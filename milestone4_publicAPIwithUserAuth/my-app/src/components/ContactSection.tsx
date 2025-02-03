import Navbar2 from "./Navbar2"; // Your existing Navbar component
import { FaPhone, FaMailBulk, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Navbar */}
      <div className="w-full">
        <Navbar2 />
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Section (Contact Info) */}
        <div className="flex-1 flex flex-col justify-center items-start text-black px-6 md:px-16 py-8 space-y-4">
          {/* Contact Us Heading */}
          <h6 className="text-lg font-bold font-montserrat">CONTACT US</h6>
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat leading-tight">
            Get in touch <br /> today!
          </h2>
          {/* Subtext */}
          <p className="text-base md:text-lg font-montserrat">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 text-blue-600">
                <FaPhone />
              </span>
              <span className="text-lg md:text-xl font-bold font-montserrat">
                Phone: +451 215 215
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 text-blue-600">
                <FaMailBulk />
              </span>
              <span className="text-lg md:text-xl font-bold font-montserrat">
                Fax: +451 215 215
              </span>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
              <FaInstagram />
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
              <FaYoutube />
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                <FaFacebook />
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                <FaTwitter />
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                <FaLinkedin />
            </span>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto flex items-center justify-center px-6 md:px-0">
          <img
            src="/assets/ShoppingFamily.png" // Ensure correct path
            alt="Shopping Family"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
