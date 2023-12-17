import React from "react";

const Home = () => {
  return (
    <div className=" container flex justify-center h-screen ">
      <div className="text-center">
        <img src="./avatar.png" alt="" className="mx-auto my-9 w-[270px]" />
        <h1 className="text-[55px] text-white font-extrabold">
          I do code and <br /> make content{" "}
          <span className="text-pink-500">about it!</span>
        </h1>
        <p className="text-[18px] max-w-2/3 mx-auto pt-5 text-white font-extralight">
          I am a seasoned full-stack software engineer with over <br /> 8 years
          of professional experience, specializing in backend development.{" "}
          <br /> My expertise lies in crafting robust and scalable SaaS-based{" "}
          <br />
          architectures on the Amazon AWS platform.
        </p>
        <div className="pt-5 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Get in touch
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
