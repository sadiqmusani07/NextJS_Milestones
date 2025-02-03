import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing react-icons for support icons

export default function GetSupport() {
  return (
    <div className="bg-white text-black py-16 px-6 w-full">
      {/* Container with max width and center alignment */}
      <div className="max-w-screen-xl mx-auto flex flex-col items-center w-full">

        {/* Left Section - Text */}
        <div className="text-center space-y-4 w-full md:w-1/3 mb-8 md:mb-0 flex flex-col justify-center">
          <p className="text-lg text-black">Visit our Office</p>
          <h2 className="text-3xl font-bold">We help small businesses with big ideas</h2>
        </div>

        {/* Right Section - Cards */}
        <div className="w-full md:w-2/3 space-y-8 md:space-y-0 flex flex-col md:flex-row justify-between mt-12">
          
          {/* Left Card (Phone Support) */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full md:w-1/3 min-h-[350px] flex flex-col justify-between">
            <div className="flex justify-center">
              <FaPhoneAlt className="w-12 h-12 text-[#23A6F0]" />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm font-bold text-black">georgia.young@xample.com</p>
              <p className="text-sm font-bold text-black">georgia.young@ple.com</p>
              <br />
              <p className="text-md font-bold text-black">Get Support</p>
            </div>
            <div className="mt-6">
              <button className="border-2 border-[#23A6F0] text-[#23A6F0] py-2 px-4 rounded-full w-full hover:border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white">
                Submit Request
              </button>
            </div>
          </div>

          {/* Center Card (Email Support) */}
          <div className="bg-[#252B42] text-white p-6 rounded-lg shadow-md w-full md:w-1/3 min-h-[350px] flex flex-col justify-between">
            <div className="flex justify-center">
              <FaMapMarkerAlt className="w-12 h-12 text-[#23A6F0]" />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm font-bold text-white">georgia.young@xample.com</p>
              <p className="text-sm font-bold text-white">georgia.young@ple.com</p>
              <br />
              <p className="text-md font-bold text-white">Get Support</p>
            </div>
            <div className="mt-6">
              <button className="border-2 border-white text-white py-2 px-4 rounded-full w-full hover:border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white">
                Submit Request
              </button>
            </div>
          </div>

          {/* Right Card (Message Support) */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full md:w-1/3 min-h-[350px] flex flex-col justify-between">
            <div className="flex justify-center">
              <FaEnvelope className="w-12 h-12 text-[#23A6F0]" />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm font-bold text-black">georgia.young@xample.com</p>
              <p className="text-sm font-bold text-black">georgia.young@ple.com</p>
              <br />
              <p className="text-md font-bold text-black">Get Support</p>
            </div>
            <div className="mt-6">
              <button className="border-2 border-[#23A6F0] text-[#23A6F0] py-2 px-4 rounded-full w-full hover:border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
