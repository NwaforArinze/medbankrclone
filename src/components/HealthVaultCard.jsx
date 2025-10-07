import React from "react";

const HealthVaultCard = () => {
  return (
    <div className="w-full h-auto lg:h-[509px] bg-white rounded-[16px] p-[9px]">
      <div className="bg-[#fafafa] rounded-[10px] px-[10px] pt-[30px] pb-[50px]">
        <h2 className="text-[20px] font-[355] tracking-[-1%] leading-[20px] text-[#161616] mb-[10px]">
          AI-Powered Health Vault
        </h2>
        <p className="text-[12px]/[20px] font-normal tracking-[-0.5%] text-[#6C7278] pr-2">
          Let AI organize your messy medical records – upload prescriptions or
          lab results, and we’ll auto-categorize everything.
        </p>
      </div>
      <img src="/Health Vault.png" alt="Health Vault" className="mt-[-20px]" />
    </div>
  );
};

export default HealthVaultCard;
