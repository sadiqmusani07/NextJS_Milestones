import Image from "next/image";
import WhiteTShirtBoy from "@/../../public/assets/WhiteTShirtBoyNoBG.png";

export default function VitaProduct() {
  return (
    <div className="w-full bg-[#23856D] mt-[-130px] py-16 px-4 border-t-4 border-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h4 className="font-Montserrat font-normal text-white text-xl">SUMMER 2020</h4>
          <h1 className="font-Montserrat font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-white text-base sm:text-lg">
            We know how large objects will act, We know how are objects will act, We know.
          </p>
          <div className="flex items-center gap-8">
            <h3 className="font-Montserrat font-bold text-white text-2xl">$16.48</h3>
            <button className="bg-[#2DC071] text-white font-Montserrat text-base sm:text-lg py-3 px-8 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src={WhiteTShirtBoy} alt="Red Sweater Couple" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
