import img1 from "../../../assets/accountsAssests/octicon_people-16.svg";
import img2 from "../../../assets/accountsAssests/octicon_people-1-36.svg";
import img3 from "../../../assets/accountsAssests/octicon_people-16 (1).svg";
import img4 from "../../../assets/accountsAssests/octicon_people-16 (2).svg";

export default function InvoiceCard() {
  return (
    <>
      <section className="flex items-center  justify-between gap-[20px] my-[21px]">
        <div className="bg-[#FFF] flex-1 rounded-[16px] py-[24px] pl-[27px] pr-[28.5px] space-y-3  ">
          <h2 className="text-base font-semibold text-[#242628]">
            All <span className="text-[#FF3A00]">(80)</span>
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3" >
            <img src={img1} alt="" />
            <h2 className="font-semibold text-[28xl]">$500k</h2>
            </div>
            <button className="flex items-center gap-[2px]">
              <span className="font-medium  text-[10px] text-[#15994E] -tracking-[0.6px]">
                12 %
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M2.5 9.5L9 3M9 3V9.24M9 3L2.76 3"
                  stroke="#15994E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-[#FFF] rounded-[16px] flex-1 py-[24px] pl-[27px] pr-[28.5px] space-y-3  ">
          <h2 className="text-base font-semibold text-[#242628]">
            Draft <span className="text-[#FF3A00]">(12)</span>
          </h2>
          <div className="flex items-center justify-between">
           <div className="flex items-center gap-3" >
           <img src={img2} alt="" className="" />
           <h2 className="font-semibold text-[28xl]">2.70k</h2>
           </div>
            <button className="flex items-center gap-[2px]">
              <span className="font-medium  text-[10px] text-[#15994E] -tracking-[0.6px]">
                55 %
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M2.5 9.5L9 3M9 3V9.24M9 3L2.76 3"
                  stroke="#15994E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-[#FFF] flex-1 rounded-[16px] py-[24px] pl-[27px] pr-[28.5px] space-y-3  ">
          <h2 className="text-base font-semibold text-[#242628]">
          Overdue <span className="text-[#FF3A00]">(10)</span>
          </h2>
          <div className="flex items-center justify-between">
           <div className="flex items-center gap-3" >
           <img src={img3} alt="" />
           <h2 className="font-semibold text-[28xl]">5.5k</h2>
           </div>
            <button className="flex items-center gap-[2px]">
              <span className="font-medium  text-[10px] text-[#E56161] -tracking-[0.6px]">
                80 %
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <path d="M9.5 3.5L3 10M3 10V3.76M3 10H9.24" stroke="#E66161" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button>
          </div>
        </div>
        <div className="bg-[#FFF] flex-1 rounded-[16px] py-[24px] pl-[27px] pr-[28.5px] space-y-3  ">
          <h2 className="text-base font-semibold text-[#242628]">
          Paid <span className="text-[#FF3A00]">(0)</span>
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3" >
            <img src={img4} alt="" />
            <h2 className="font-semibold text-[28xl]">75</h2>
            </div>
            <button className="flex items-center gap-[2px]">
              <span className="font-medium  text-[10px] text-[#E56161] -tracking-[0.6px]">
                8 %
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M10 3.5L3.5 10M3.5 10V3.76M3.5 10H9.74" stroke="#E66161" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
