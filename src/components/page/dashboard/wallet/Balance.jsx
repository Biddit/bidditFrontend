import upArrow from '../../../../assets/images/icons/up-arrow.png'
import downArrow from "../../../../assets/images/icons/down-arrow.png";

const Balance = () => {
  return (
    <div className=" ">
      <div className="sm:ml-24   bg-white  space-y-[40px] mr-4 rounded-2xl mb-[5rem]  py-2 px-10  shadow-2xl  lg:w-1/3 ">
        <div className=" mt-3 flex flex-col gap-4">
          <h1 className=" text-lg font-semibold text-black">Token Balance</h1>
          <p className="  font-bold text-4xl">300 Tokens</p>
        </div>
        <div className="flex justify-between">
          <div className=" flex gap-1 items-center justify-center w-[35px]">
            <img className="" src={upArrow} alt="" />
            <p className=' font-bold'>-50</p>
          </div>
          <div className="w-[35px]   gap-1 flex items-center">
            <img className="" src={downArrow} alt="" />
            <p className=' font-bold'>-50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
