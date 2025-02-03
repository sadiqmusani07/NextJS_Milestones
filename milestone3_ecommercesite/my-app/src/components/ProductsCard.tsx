import Image from "next/image";
import CardText from "./CardText";
import pic1 from "@/../public/assets/product.png";
import pic2 from "@/../public/assets/product1.png";
import pic3 from "@/../public/assets/product2.png";
import pic4 from "@/../public/assets/product3.png";
import pic5 from "@/../public/assets/product4.png";
import pic6 from "@/../public/assets/product5.png";
import pic7 from "@/../public/assets/product6.png";
import pic8 from "@/../public/assets/product7.png";

export default function ProductsCard() {
  const products = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  return (
    <div className="w-full flex justify-center bg-[#FAFAFA] py-[80px]">
      <div className="max-w-screen-xl w-full px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h4 className="text-[#737373] text-lg font-Montserrat font-normal">
            Featured Products
          </h4>
          <h3 className="text-[#252B42] text-3xl font-Montserrat font-bold">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373] text-sm font-Montserrat font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Cards */}
          {products.map((pic, index) => (
            <div key={index} className="w-full h-auto flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-[300px]">
                <Image src={pic} alt={`product${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <CardText />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
