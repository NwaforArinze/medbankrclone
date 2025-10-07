import React from "react";
import Grid from "./Grid";

const HealthCompanion = () => {
  return (
    <div className="bg-[#F7F7F8] border-5 border-white flex flex-col justify-center rounded-[24px] mt-[4px] px-[3%] lg:px-[80px] pt-[45px] lg:pt-[94px] pb-[62px] mb-[2px] gap-4">
      <div>
        <h1 className="text-[22px]/[120%] lg:text-[32px]/[120%] text-[#303030] font-[355] mt-6">
          MedBankr – Your Smarter Health Companion
        </h1>
        <p className="lg:w-xl text-[16px] lg:text-[18px]/[26px] tracking-[0.5%] text-[#6C7278] font-[350] mt-[12px]">
          Lorem ipsum dolor sit amet consectetur. Amet metus vehicula enim at
          aliquet lacus mauris vitae semper.
        </p>
      </div>
      <Grid />
    </div>
  );
};

export default HealthCompanion;
