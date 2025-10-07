import React from "react";

const EarlyAccess = () => {
  return (
    <div>
      <div className="h-auto lg:h-[270px] bg-[#EFF1F5] p-[10px] border-[#E2E4E9] rounded-[16px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
          <div className="col-span-1 lg:col-span-2 w-full bg-white rounded-[16px] p-[10px]">
            <div className="h-auto lg:h-[228px] bg-[linear-gradient(115deg,_#173c3d_50%,_#478b7d_80%,_#3AE2AD_100%)] lg:bg-[linear-gradient(115deg,_#173c3d_80%,_#478b7d_90%,_#3AE2AD_100%)] rounded-[10px] pt-[50px] pl-[15px] pr-[15px] lg:pl-[30px] lg:pr-[0] py-[30px] text-white">
              <h3 className="text-[22px]/[25px] lg:text-[24px]/[20px] font-[355] tracking-[1%] mb-[20px]">
                Join Nigeria's Most Trusted Health Network
              </h3>
              <p className="text-[16px]/[20px] font-[355] tracking-[0.5%]">
                Reach more patients. Access complete medical histories. Grow
                your practice.
              </p>
              <button className="bg-[#38E1AC] rounded-full py-[14px] px-[20px] text-[14px]/[24px]  tracking-[-1%] font-[365] mt-[25px] text-[#173C3D] hover:bg-[#32c9a1] transition duration-300 shadow-custom-3">
                Get Early Access
              </button>
            </div>
          </div>
          <div className=" w-full h-auto bg-white rounded-[16px] p-[9px]">
            <div className="bg-[#fafafa] rounded-[10px] px-[10px] py-[10px] flex justify-center items-center h-[228px]">
              <img src="/team.png" alt="team" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
