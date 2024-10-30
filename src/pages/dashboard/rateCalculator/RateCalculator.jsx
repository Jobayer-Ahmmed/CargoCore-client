import "./rateCalculator.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { BsArrowReturnLeft } from "react-icons/bs";

const RateCalculator = () => {
  return (
    <div className="w-full m-5">
      <div className="p-5 border-2 border-borderColor rounded-2xl">
        <p className="flex gap-2 items-center">
          <IoIosArrowDown />{" "}
          <span className="text-xl font-semibold">
            Commission Report Criteria
          </span>
        </p>
        <div className="mt-4 flex gap-4">
          <div className="w-full">
            <h3 className="font-medium">Payroll Date Range</h3>
            <div className="mt-4 mb-6 flex flex-col gap-4 text-[14px]">
              <div className="flex justify-between items-center pl-5 pr-5 pt-[10px] pb-[10px] border-2 border-borderColor rounded-xl">
                <p>1. Tample, FL, USA</p>
                <button>
                  <RxCross2 />
                </button>
              </div>
              <div className="flex justify-between items-center pl-5 pr-5 pt-[10px] pb-[10px] border-2 border-borderColor rounded-xl">
                <p>2. Tample, FL, USA</p>
                <button>
                  <RxCross2 />
                </button>
              </div>
            </div>
            <button className="w-full  flex justify-center items-center gap-2  py-[10px]  border-2 border-black rounded-xl">
              <FiPlus /> <span>Add Pickup</span>
            </button>
          </div>
          <div className="w-full">
            <h3 className="font-medium">Payroll Date Range</h3>
            <div className="mt-4 mb-6 flex flex-col gap-4 text-[14px]">
              <div className="flex justify-between items-center pl-5 pr-5 pt-[10px] pb-[10px] border-2 border-borderColor rounded-xl">
                <p>1. Tample, FL, USA</p>
                <button>
                  <RxCross2 />
                </button>
              </div>
              <div className="flex justify-between items-center pl-5 pr-5 pt-[10px] pb-[10px] border-2 border-borderColor rounded-xl">
                <p>2. Tample, FL, USA</p>
                <button>
                  <RxCross2 />
                </button>
              </div>
            </div>
            <button className="w-full flex justify-center items-center gap-2 py-[10px] border-2 border-black rounded-xl">
              <FiPlus /> <span>Add Pickup</span>
            </button>
          </div>
          <div className="w-full ">
            <h3 className="font-medium">Truck Type</h3>
            <div class="radio-group mt-4 flex justify-between items-center gap-4">
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-primaryColor ">
                  <div className="w-[10px] h-[10px] bg-primaryColor rounded-full "></div>
                </div>
                <label>Dry Van</label>
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-primaryColor ">
                  {/* <div className="w-[10px] h-[10px] bg-primaryColor rounded-full "></div> */}
                </div>
                <label>Reefer</label>
              </div>
              <div className="flex gap-2 items-center cursor-pointer ">
                <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-primaryColor ">
                  {/* <div className="w-[10px] h-[10px] bg-primaryColor rounded-full "></div> */}
                </div>
                <label>Dry Reefer</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="flex gap-2 items-center text-white bg-primaryColor px-6 py-3 rounded-xl">
            <BsArrowReturnLeft className="text-lg" /> <span>Gate Rate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateCalculator;
