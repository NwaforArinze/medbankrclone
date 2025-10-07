import React from "react";

const SpecialistCard = () => {
  return (
    <div className="w-full h-auto lg:h-[295px] bg-white rounded-[16px] p-[9px]">
      <div className="bg-[#fafafa] rounded-[10px] px-[10px] pt-[30px] ">
        <h2 className="text-[20px] font-[355] tracking-[-1%] leading-[20px] text-[#161616] mb-[10px]">
          AI-Matched Specialists
        </h2>
        <p className="text-[12px]/[20px] font-normal tracking-[-0.5%] text-[#6C7278] pr-2 mb-[30px]">
          Our algorithm finds the right doctor for your condition, location, and
          budget – no more guesswork.
        </p>
        <img
          src="/specialist.png"
          alt="AI-Matched Specialists"
          className="pt-[12px] pb-[18px]"
        />
      </div>
    </div>
  );
};

export default SpecialistCard;
