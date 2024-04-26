import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginWrap() {
  const [openEye, setOpenEye] = useState();
  // const handleEyeIcon = () => {
  //   if (openEye === false || openEye === 0) {
  //     setOpenEye(1);
  //   } else {
  //     setOpenEye(false);
  //   }
  // };
  return (
    <>
      <div className="sm:ml-24 bg-white mr-4 rounded-2xl mb-[5rem] mt-[10rem] pt-4 px-16  shadow-2xl  lg:w-1/2 ">
        <h1 className="py-10 text-3xl font-semibold text-[#f57d1f]">Login</h1>
        <div className="mx-auto mb-20 md:w-2/3 lg:w-full">
          <form>
            <div className="flex flex-col justify-between gap-y-4">
              <div className="w-full ">
                <label htmlFor="firstname" className="font-bold w-full text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your Email "
                  className="mt-2 block w-full rounded-lg border-[2px] border-gray-300 py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                />
              </div>

              <div className="w-full">
                <label htmlFor="lastname" className="font-bold w-full text-sm">
                  Password
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your password"
                  className="mt-2 block w-full rounded-lg border-[2px] border-gray-300  py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                />
              </div>
            </div>
            <div className="flex py-4">
              <input
                type="checkbox"
                className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-4 w-4 rounded"
              />
              <p>
                <span className="text-gray-300">I agree to all the </span>
                <b className="text-sm">Terms, Privacy Policy</b>{" "}
                <span> and</span> <b className="text-sm">Fees</b>.
              </p>
            </div>
            <button className="bg-[#f57d1f] text-white w-full py-2 rounded-lg">
              Register
            </button>
            <p className="text-gray-300 py-2">
              Don&apos;t have an Account?
              <Link to="/signup">
                <span className="font-bold text-[#000] text-sm"> SignUp.</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginWrap;
