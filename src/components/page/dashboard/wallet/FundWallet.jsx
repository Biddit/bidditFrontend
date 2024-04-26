import { useState } from "react";

const FundWallet = () => {
  const [open,setOpen]=useState(false)
  return (
    <div className=" ">
      <div className="sm:ml-24  bg-white mr-4 rounded-2xl mb-[5rem]  px-16  shadow-2xl  lg:w-1/2 ">
        <h1 className="py-[30px] text-3xl font-semibold text-[#f57d1f]">
          Funded Wallet
        </h1>
        <div className="mx-auto mb-20 md:w-2/3 lg:w-full">
          <form>
            <div className="flex flex-col justify-between gap-y-4">
              <div className="w-full">
                <label htmlFor="firstname" className="font-bold w-full text-sm">
                  Select Payment
                </label>
                <div className="flex  gap-5">
                  <div onClick={()=> setOpen(!open)} className="mt-2 flex items-center  justify-center w-full rounded-lg border-[2px] border-gray-300 py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none">
                    <input
                      type="radio"
                      className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2  h-4 w-4 rounded"
                    />
                    <p>Momo</p>
                  </div>
                  <div onClick={()=> setOpen(false)} className="mt-2  flex items-center justify-center w-full rounded-lg border-[2px] border-gray-300 py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none">
                    <input
                      type="radio"
                      className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2  h-4 w-4 rounded"
                    />
                    <p>Credit Card</p>
                  </div>
                </div>
              </div>
              {open ? (
                <div className="w-full ">
                  <label
                    htmlFor="firstname"
                    className="font-bold w-full text-sm"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="100,000 "
                    className="mt-2 block w-full rounded-lg border-[2px] border-gray-300 py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                  />
                </div>
              ) : (
                <>
                  <div className="w-full ">
                    <label
                      htmlFor="firstname"
                      className="font-bold w-full text-sm"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="100,000 "
                      className="mt-2 block w-full rounded-lg border-[2px] border-gray-300 py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="lastname"
                      className="font-bold w-full text-sm"
                    >
                      Card number
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="0000 0000 0000 0000"
                      className="mt-2 block w-full rounded-lg border-[2px] border-gray-300  py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastname"
                      className="font-bold w-full text-sm"
                    >
                      Card holder name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter card holder name"
                      className="mt-2 block w-full rounded-lg border-[2px] border-gray-300  py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-5">
                    <div className="w-full">
                      <label
                        htmlFor="lastname"
                        className="font-bold w-full text-sm"
                      >
                        Expiry date
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="MM/YY"
                        className="mt-2 block w-full rounded-lg border-[2px] border-gray-300  py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="lastname"
                        className="font-bold w-full text-sm"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="000"
                        className="mt-2 block w-full rounded-lg border-[2px] border-gray-300  py-2 placeholder:pl-4 placeholder:text-base placeholder:text-slate-500 focus:border-blue focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* <div className="flex py-4">
              <input
                type="checkbox"
                className=" border-[2px] border-gray-200 mt-[0.2rem] mr-2 appearance-none h-4 w-4 rounded"
              />
              
            </div> */}
            <div className="flex gap-5">
              <button className=" bg-gray-400 py-2 my-3 text-white w-full  rounded-lg">
                Cancel
              </button>
              <button className="bg-[#f57d1f] py-2 my-3 text-white w-full  rounded-lg">
                Buy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
