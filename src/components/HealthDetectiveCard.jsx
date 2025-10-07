import React from "react";

const HealthDetectiveCard = () => {
  return (
    <div className="w-full h-auto lg:h-[295px] bg-white rounded-[16px] p-[9px]">
      <div className="bg-[#fafafa] rounded-[10px] px-[10px] pt-[30px] pb-[40px]">
        <h2 className="text-[20px] font-[355] tracking-[-1%] leading-[20px] text-[#161616] mb-[10px]">
          Your AI Health Detective
        </h2>
        <p className="text-[12px]/[20px] font-normal tracking-[-0.5%] text-[#6C7278] pr-2">
          Spots hidden patterns in your health history, like recurring
          infections or missed checkups, so you can take action.
        </p>
      </div>
      <img
        src="/Health Patterns.png"
        alt="Health patterns"
        className="mt-[-20px]"
      />
    </div>
  );
};

export default HealthDetectiveCard;
