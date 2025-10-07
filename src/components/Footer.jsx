import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-[linear-gradient(0deg,_#173c3d_10%,_#FFFFFF_70%)] border-5 border-white rounded-[24px] px-[3%] lg:px-[80px] py-[44px] mt-[2px] pb-[20px] gap-4 p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-[#303030] font-[355] text-[16px] lg:text-[20px]/[120%]">
            Questions?
            <p className="text-[#303030] font-[365] text-[20px] lg:text-[24px]/[150%]">
              hello@medbankr.com | +234 909 000 0000
            </p>
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-4">
          <p className="text-[#303030] font-[355] text-[18px]/[20px] lg:text-[20px]/[120%]">
            Follow our journey:
          </p>
          <span className="flex gap-3 ">
            <div className="w-8 h-8 rounded-full bg-[#3ae2ad] flex justify-center items-center shadow-custom-7">
              <Facebook ize={18} color="#ffffff" strokeWidth={1.5} />
            </div>

            <div className="w-8 h-8 rounded-full bg-[#3ae2ad] flex justify-center items-center shadow-custom-7">
              <Twitter ize={18} color="#ffffff" strokeWidth={1.5} />
            </div>

            <div className="w-8 h-8 rounded-full bg-[#3ae2ad] flex justify-center items-center shadow-custom-7">
              <Instagram ize={18} color="#ffffff" strokeWidth={1.5} />
            </div>

            <div className="w-8 h-8 rounded-full bg-[#3ae2ad] flex justify-center items-center shadow-custom-7">
              <Linkedin ize={18} color="#ffffff" strokeWidth={1.5} />
            </div>

            <div className="w-8 h-8 rounded-full bg-[#3ae2ad] flex justify-center items-center shadow-custom-7">
              <Youtube size={18} color="#ffffff" strokeWidth={1.5} />
            </div>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-[96px] mb-[38px]">
        <img src="/Vector (3).png" alt="medbankr Logo" />
        <img src="/Vector (2).png" alt="medbankr" />
      </div>
      <div className="flex justify-between items-center gap-2 mt-4 mb-4  text-white">
        <p className="w-[50%] lg:w-fit font-[355] text-[12px]/[18px] lg:text-[14px]/[20px] tracking-[0.5%] lg:text-center">
          &copy; 2025 Medbankr - Privacy Policy | Terms of Service
        </p>
        <p className="font-[355] text-[12px]/[18px] lg:text-[14px]/[20px] tracking-[0.5%] lg:text-center">
          Proudly built in Nigeria
        </p>
      </div>
    </div>
  );
};

export default Footer;
