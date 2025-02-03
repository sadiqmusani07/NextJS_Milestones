// src/app/page.tsx
import Footer from '@/components/Footer';
import Product from '@/components/Product';
import ShopPage from '@/components/ShopPage';
import GetSupport from '@/components/GetSupport';
import ContactSection from '@/components/ContactSection';
import { PiArrowBendRightDownLight } from 'react-icons/pi';  // Importing the desired arrow icon

export default function Contact() {
  return (
    <main className="bg-gray-50">
      {/* Contact Section */}
      <section className="relative">
        <ContactSection />
      </section>

      {/* Get Support */}
      <section className="relative">
        <GetSupport />
      </section>

      {/* Call to Action */}
      <div className="bg-white w-full py-16 text-center relative">
        {/* Arrow Icon on top */}
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2">
          <PiArrowBendRightDownLight className="w-12 h-12 text-blue-500" />
        </div>

        {/* Heading and Subheading */}
        <h3 className="text-sm font-semibold text-gray-500 mb-2">
          WE CAN’T WAIT TO MEET YOU
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let’s Talk</h2>

        {/* Button */}
        <a
          href="#"
          className="bg-blue-500 text-white text-lg py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Try it free now
        </a>
      </div>

      {/* Footer */}
      <section className="relative mt-16">
        <Footer />
      </section>
    </main>
  );
}
