import Image from "next/image";
import fourcolourPic from "@/../../public/assets/4ColoursPic.png";

export default function CardText() {
  return (
    <div className="w-full h-[188px] py-[20px] px-[20px] flex flex-col items-center justify-center gap-[10px]">
      <h5 className="text-[#252B42] text-lg font-Montserrat font-bold text-center">
        CardText Design
      </h5>
      <p className="text-[#737373] text-sm font-Montserrat font-normal text-center">
        Ecommerce Template
      </p>
      <div className="flex justify-center gap-[5px]">
        <h5 className="text-[#BDBDBD] text-sm font-Montserrat font-bold">
          $106.98
        </h5>
        <h5 className="text-[#23856D] text-sm font-Montserrat font-bold">
          $46.53
        </h5>
      </div>
      <div className="w-[82px] h-[16px] flex justify-center">
        <Image src={fourcolourPic} alt="4Colours" />
      </div>
    </div>
  );
}
