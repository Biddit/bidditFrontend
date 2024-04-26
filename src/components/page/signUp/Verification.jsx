import React from "react";
import Content from "./Content";

const Verification = () => {
  return (
    <div className="flex">
      <Content />
      <div className="sm:ml-24  bg-white mr-4 rounded-2xl mb-[5rem] mt-[10rem] pt-4 px-16 h-[70vh] shadow-2xl  lg:w-1/2 ">
        <h1 className="py-10 text-3xl font-semibold text-[#f57d1f]">
          Email Verification
        </h1>
        <div className="mx-auto mb-20 md:w-2/3 lg:w-full">
          <form>
            <div className="flex flex-col justify-between gap-y-4">
              <p>
                <span className="text-gray-300">
                  All 6-digit code has been sent to your email
                  sim****mail@gmail.com
                </span>
                <b className="text-sm">Change</b>.
              </p>
              <div className="w-full flex gap-4">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=""
                  className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-[50px] w-[50px] rounded-xl"
                />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=""
                  className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-[50px] w-[50px] rounded-xl"
                />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=""
                  className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-[50px] w-[50px] rounded-xl"
                />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=""
                  className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-[50px] w-[50px] rounded-xl"
                />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=""
                  className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-[50px] w-[50px] rounded-xl"
                />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder=""
                  className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-[50px] w-[50px] rounded-xl"
                />
              </div>
            </div>
            <div className="flex py-4">
              <p>
                <b className="text-sm">0:45 remaining</b>{" "}
              </p>
            </div>
            <button className="bg-[#f57d1f] text-white w-full py-2 rounded-lg">
              Verify Email
            </button>
            <p className="text-gray-300 py-2">
              Didnt receive any code?
              <span className="font-bold text-[#000] text-sm">Resend</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
