import Image from "next/image";
import EPMen from "../../public/assets/EP_Men.png";
import EPWomen from "../../public/assets/EP_Women.png";
import EPAccs from "../../public/assets/EP_Accessories.png";
import EPKids from "../../public/assets/EP_Kids.png";

export default function EditorsPick() {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      <div className="max-w-screen-xl w-full h-auto flex flex-col gap-10 bg-[#FAFAFA] px-6 sm:px-10 py-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px] text-center">
            EDITOR’S PICK
          </h3>
          <p className="max-w-md font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-6">
          {/* Men Image */}
          <div className="relative w-[48%] lg:w-[45%] xl:w-[40%] h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src={EPMen}
              alt="Men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-[45%] lg:w-[20%] h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src={EPWomen}
              alt="Women"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="flex flex-col gap-6 w-full lg:w-[20%]">
            {/* Accessories Image */}
            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[240px]">
              <Image
                src={EPAccs}
                alt="Accessories"
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] leading-[20px] hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[240px]">
              <Image
                src={EPKids}
                alt="Kids"
                className="w-full h-full object-cover rounded-md"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-[#252B42] text-[14px] leading-[20px] hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
