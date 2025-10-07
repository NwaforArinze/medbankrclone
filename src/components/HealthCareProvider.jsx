import React from "react";
import EarlyAccess from "./EarlyAccess";

const HealthCareProvider = () => {
  return (
    <div className="bg-[#F7F7F8] border-5 border-white flex flex-col justify-center rounded-[24px] mt-[2px] px-[3%] lg:px-[80px] pt-[80px] pb-[75px] mb-[2px] gap-4 p-4">
      <div className="mx-auto">
        <h1 className="text-[22px]/[120%] lg:text-[32px]/[120%] text-[#303030] font-[355] lg:mt-6 text-center">
          For Healthcare Providers
        </h1>
        <p className="lg:w-xl text-[18px]/[26px] tracking-[0.5%] text-[#6C7278] font-[350] mt-[12px] mb-[15px] text-center">
          Lorem ipsum dolor sit amet consectetur. Amet metus vehicula enim at
          aliquet lacus mauris vitae semper.
        </p>
      </div>
      <EarlyAccess />
    </div>
  );
};

export default HealthCareProvider;
