const SymptomsChecker = () => {
  return (
    <div className="w-full h-auto lg:h-[509px] bg-white rounded-[16px] p-[9px]">
      <div className="bg-[#fafafa] rounded-[10px] px-[10px] pt-[30px] ">
        <h2 className="text-[20px] font-[355] tracking-[-1%] leading-[20px] text-[#161616] mb-[10px]">
          Intelligent Symptom Checker
        </h2>
        <p className="text-[12px]/[20px] font-normal tracking-[-0.5%] text-[#6C7278] pr-2 mb-[30px]">
          Describe your symptoms in plain English or Pidgin. Our AI asks smart
          follow-ups and recommends next steps.
        </p>
        <img
          src="/Symtoms Checker.png"
          alt="Symtoms Checker"
          className="pt-[5px]"
        />
      </div>
    </div>
  );
};

export default SymptomsChecker;
