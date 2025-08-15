import React from "react";

const Home = () => {
  return (
    <div className="h-[715px] bg-[#3B5D50]">
      {/* Navbar */}
      <nav className="flex justify-around items-center p-6 bg-[#3B5D50] text-white">
        {/* Logo */}
        <h1 className="text-4xl font-medium">Furni.</h1>

        {/* Links */}
        <div className="flex items-center gap-11">
          <ul className="flex gap-6">
            <li className="text-xl underline underline-offset-8 decoration-[#F9BF29] decoration-4 transition duration-200 cursor-pointer">
              Home
            </li>
            <li className="text-xl text-gray-300 hover:text-white hover:underline underline-offset-8 decoration-[#F9BF29] decoration-4 transition duration-200 cursor-pointer">
              About us
            </li>
            <li className="text-xl text-gray-300 hover:underline underline-offset-8 decoration-[#F9BF29] decoration-4 transition duration-200 cursor-pointer">
              Services
            </li>
            <li className="text-xl text-gray-300 hover:underline underline-offset-8 decoration-[#F9BF29] decoration-4 transition duration-200 cursor-pointer">
              Blog
            </li>
            <li className="text-xl text-gray-300 hover:underline underline-offset-8 decoration-[#F9BF29] decoration-4 transition duration-200 cursor-pointer">
              Contact us
            </li>
          </ul>

          {/* Cart / Icons */}
          <div className="flex gap-3">
            <span>0</span>
            <span>0</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center px-6 md:px-16 gap-5 mt-20 md:px-[255px]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
          {/* Text */}
          <h1 className="text-white text-4xl md:text-6xl font-semibold md:w-[30rem]">
            Modern Interior Design Studio
          </h1>

          {/* Decorative Image */}
          <img
            src="/img/Dotted.png"
            alt="Decor"
            className="w-[150px] md:w-[260px]"
          />
        </div>

        {/* Buttons + Main Image */}
        <div className="flex flex-col md:flex-row items-center justify-between ">
          {/* Buttons */}
          <div className="flex gap-4 ">
            <button className="cursor-pointer  rounded-[30px] px-6 py-3 bg-[#F9BF29] font-medium">
              Shop now
            </button>
            <button className="cursor-pointer rounded-[30px] px-6 py-3 border-2 border-[#C4C4C4] text-white font-medium">
              Explore
            </button>
          </div>

          {/* Main Couch Image */}
          <img
            src="/img/couch 1.png"
            alt="Couch"
            className="w-full max-w-[810px] md:w-[70%] lg:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
