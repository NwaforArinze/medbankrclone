import React from "react";
import Header from "./Header";
import Awaiting from "./Awaiting";

const Hero = () => {
  return (
    <div className=" bg-auto bg-center lg:bg-cover bg-no-repeat bg-[url('/hero.png')]">
      <Header />
      <Awaiting />
    </div>
  );
};

export default Hero;
