import React from "react";

const MedicalTracker = () => {
  return (
    <div className="w-full h-auto lg:h-[509px] bg-white rounded-[16px] p-[9px]">
      <div className="bg-[#fafafa] rounded-[10px] px-[10px] py-[30px] ">
        <h2 className="text-[20px] font-[355] tracking-[-1%] leading-[20px] text-[#161616] mb-[10px]">
          Smart Medication Tracker
        </h2>
        <p className="text-[12px]/[20px] font-normal tracking-[-0.5%] text-[#6C7278] pr-2 mb-[30px]">
          AI learns your routine and reminds you (and caregivers) when to take
          pills, with drug interaction alerts.
        </p>
        <img
          src="/Frame.png"
          alt="Smart Medication Tracker"
          className="pt-[15px]"
        />
      </div>
    </div>
  );
};

export default MedicalTracker;
