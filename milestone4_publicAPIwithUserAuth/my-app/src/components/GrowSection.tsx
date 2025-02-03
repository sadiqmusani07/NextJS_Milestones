import Image from "next/image";

export default function GrowSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left Section (65%) with Blue Background and Text */}
        <div className="lg:col-span-2 bg-[#23A6F0] text-white px-6 py-12 flex flex-col justify-center space-y-12 gap-x-2.5 space-x-16">
          {/* Heading */}
          <h3 className="text-xl font-bold font-montserra ">WORK WITH US</h3>

          {/* Subheading */}
          <h2 className="text-4xl font-bold font-montserrat">Now Let’s Grow Yours</h2>

          {/* Paragraphs */}
          <p className="text-base font-montserrat">
            The gradual accumulation of information about atomic and <br />
            small-scale behavior during the first quarter of the 20th
          </p>

          {/* Button */}
          <button className="bg-transparent border-2 border-white text-white w-[150px] h-[50px] sm:w-[200px] sm:h-[55px] md:w-[250px] md:h-[60px] rounded-md font-semibold hover:bg-white hover:text-[#23A6F0] transition duration-300">
            Button
           </button>
        </div>

        {/* Right Section (35%) with Image */}
        <div className="lg:col-span-1 w-full h-full relative">
          <Image
            src="/assets/GrowGirl.png" // Replace with your image path
            alt="Work With Us"
            className="object-cover w-full h-full"
            layout="responsive"
            width={1600}  // Specify the width based on your image's natural dimensions
            height={900}  // Specify the height based on your image's natural dimensions
          />
        </div>
      </div>
    </section>
  );
}
