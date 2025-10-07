import Chatbot from "./Chatbot";

const Awaiting = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[75px] py-[6px] pr-[16px] pl-[8px]">
      <div className="w-[297.19px] h-[42px] relative flex justify-center items-center border-[1px] border-[#59e6ba] border-solid rounded-[26px] bg-[#FAFAFA]">
        <img src="/awaiting.png" alt="awaiting" />
      </div>

      <div className="w-[92vw] lg:w-[950px] my-3 text-center mt-10 lg:mt-0">
        <h1 className="text-[22px]/[110%] lg:text-[52px]/[110%] tracking-[2px] text-[#303030] font-[400]">
          Your AI Health Companion - Smarter Care, Fewer Worries
        </h1>
        <p className="w-90vw lg:w-[800px] mx-auto text-[16px] lg:text-[20px]/[150%] tracking-[1px] text-[#606060] font-[300] mt-[16px]">
          Nigeria's first AI-powered health vault that stores your records,
          checks symptoms, tracks meds, and connects you to top specialists -
          all in one place
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-6">
        <button className="flex justify-center items-center gap-2 bg-[#303030] rounded-full pl-[16px] pr-[8px] py-[4px] text-white shadow-custom-4 text-[14px]/[24px] tracking-[-1%]">
          Coming Soon On{" "}
          <img src="/download.png" alt="google and apple" className=" h-9" />
        </button>
        <button className="bg-[#38E1AC] rounded-full px-[16px] py-[10px] shadow-custom-3 text-[14px]/[24px] tracking-[-1%]">
          Get Early Access
        </button>
      </div>
      <Chatbot />
    </div>
  );
};

export default Awaiting;
