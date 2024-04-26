import React from "react";
import logo from "../../../assets/images/bg/banner-bg1.png";

const AboutHead = () => {
  return (
    <div className="relative h-screen">
      <img src={logo} alt="Background" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#210D42] via-[#210D42]/80 to-[#f57d1f] opacity-75"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pl-8 text-white">
          <div className="border-l-[#f57d1f] border-l-[4px]  pl-3 ">
            <h1 className="text-4xl leading-2 font-bold mb-4">What Is Biddit And</h1>
            <h2 className="text-4xl leading-6 font-bold mb-4">How Valid Is It?</h2>
          </div>
          <p className="mb-8 lg:w-7/12">
            Biddit Is An Indigenous Bidding Platform That Seeks To Revolutionize
            The Way Users Participate In Bidding Enabling Bidders To Bargain For
            Reasonable Prices Thereby Put A Value To Every Penny
          </p>
          <div className="flex justify-start space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Bid Now
            </button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
