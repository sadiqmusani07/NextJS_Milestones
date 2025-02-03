// src/components/TopBlackLine.tsx
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';
export default function TopGreenLine() {
    return (
      <div className="bg-[#23856D] text-white hidden md:flex items-center justify-between px-6 py-2">
      {/* This div ensures content stays centered with the same gap on left and right like Navbar */}
      <div className="max-w-screen-xl mx-auto flex justify-between w-full">
        {/* Left Section - Phone and Email */}
        <div className="flex items-center gap-4">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <h6 className="text-[14px] font-bold font-montserrat">(225) 555-0118</h6>
          </div>
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <h6 className="text-[14px] font-bold font-montserrat">michelle.rivera@example.com</h6>
          </div>
        </div>

        {/* Center Section - Summer Sale */}
        <div className="text-[14px] text-center font-bold font-montserrat">
          Follow us and get a chance to win 80% off
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex items-center gap-3">
          <h6 className="text-[14px] font-bold font-montserrat">Follow Us:</h6>
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
        </div>
      </div>
    </div>
    );
  }
