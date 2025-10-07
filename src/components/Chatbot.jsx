const Chatbot = () => {
  return (
    <div className="w-[95%] border-1 border-[#3030301A] bg-white lg:w-[573px] h-auto lg:h-[224px] flex flex-col justify-center rounded-[16px] mt-6 mb-[50px] lg:mb-[30px] shadow-green-combo gap-4 p-4 shadow-custom-6">
      <div className="flex justify-end ">
        <div
          className="w-[75%] lg:w-fit ml-auto lg:mr-10  text-[12px]/[22px] border-white tracking-[-0.06px] text-white font-[400] bg-[#C5C4C9] px-[15px] py-[5px] rounded-full"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)", // for Safari support
            boxShadow: "0px 10px 16.2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Good morning. I've been feeling quite tired lately.
        </div>
      </div>
      <div className="flex justify-start lg:justify-center items-center gap-2 lg:gap-4">
        <img src="/chatbot.png" alt="chatbot" />
        <span className="w-[65%] lg:w-fit text-[12px]/[22px] tracking-[-0.06px] text-[#383838] font-[400] px-[15px] py-[5px] rounded-full shadow-custom-5">
          Good morning! How are you feeling today?
        </span>
      </div>
      <div className="flex justify-center items-center">
        <img src="/controls.png" alt="controls" />
      </div>
    </div>
  );
};

export default Chatbot;
