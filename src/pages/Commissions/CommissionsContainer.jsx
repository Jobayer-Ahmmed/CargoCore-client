import CommissionHeader from "./CommissionHeader";
import searchIcon from "../../assets/navAssests/MagnifyingGlass.svg";
import CommissionTable from "./CommissionTable";
import CommissionModal from "./CommissionModal";
import img1 from "../../assets/commissionAssets/export 1.svg";
import img2 from "../../assets/commissionAssets/edit (1) 1.svg"
import img3 from "../../assets/commissionAssets/maps-and-flags 1.svg"
import img4 from "../../assets/commissionAssets/money (2) 1.svg"
import img5 from "../../assets/commissionAssets/thumbs-down- 1.svg"


const butttons = [
  {
    img: img2,
    title: "Edit Commission",
  },
  {
    img: img3,
    title: "Approve",
  },
  {
    img: img4,
    title: "Mark as Paid",
  },
  {
   img: img5,
    title: "Mark as Not paid",
  },
  {
    img: img1,
    title: "Export",
  },
];

export default function CommissionsContainer() {
  return (
    <section className="pr-5 relative     ">
      <header className="my-5">
        <CommissionHeader />
      </header>
      <main className="border border-[#E5E7E8] bg-[#FFF] rounded-[16px]">
        {/* header  --- */}
        <div>
          <div className="flex items-center py-4 border-b-[1.017px] border-[#DFE1E6] justify-between px-5">
            {/* title-- */}

            <h3 className="text-textColor text-base font-semibold">
              Commission Report Criteria
            </h3>

            {/* middle--  */}

            <div className="flex items-center gap-2">
              {
                butttons?.map((btn, idx) => (
                  <button key={idx} className="text-sm font-normal flex items-center gap-2 -tracking-[0.14px] text-textColor py-[6px] px-2 ">
                  <img src={btn.img} alt="" />
                  <span>{btn.title}</span>
                </button>
                ))
              }
            
            </div>

            {/* btn-- */}
            <div className="flex items-center gap-4 ">
              {/* filter  */}

              <select
                className="rounded-[6px] border-[#EDF1F1] border py-[6px] px-3 text-sm font-normal -tracking-[0.14px]"
                name=""
                id=""
              >
                <option value="all">All</option>
                <option value="no-all">No All</option>
              </select>

              {/* <button className="text-sm font-normal  -tracking-[0.14px] text-textColor border rounded-[6px] py-[6px] px-3 border-[#EDF1F1]">
       
                <span>Export</span>
              </button> */}
            </div>
          </div>
          <div className="p-4 grid grid-cols-4 gap-5 items-center justify-between">
            {/* search-- */}
            <fieldset className=" flex gap-[10px] py-[11px]   border border-[#CDD1D4] rounded-[8px] px-3">
              <button>
                <img src={searchIcon} alt="" />
              </button>
              <input
                style={{ background: "transparent" }}
                type="search"
                placeholder="Search Load"
                className="placeholder-[#AAB0B6]  font-normal w-full text-sm outline-none -tracking-[0.16px]"
              />
            </fieldset>

            <div className="flex  py-2 px-3 justify-between items-center rounded-lg border border-[#CDD1D4]">
              <select className="w-full bg-transparent focus:outline-none">
                <option value="option1">Show All Roles</option>
                <option value="option2">Show All </option>
              </select>
            </div>

            <div className="flex py-2 px-3 justify-between items-center rounded-lg border border-[#CDD1D4]">
              <select className="w-full bg-transparent focus:outline-none">
                <option value="option1">Show All User</option>
                <option value="option2">Show All</option>
              </select>
            </div>

            <div className="flex  py-2 px-3 justify-between items-center rounded-lg border border-[#CDD1D4]">
              <select className="w-full bg-transparent focus:outline-none">
                <option value="option1">Show All Status</option>
                <option value="option2">Show All </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <CommissionTable />
        </div>
      </main>

      <div className="absolute hidden inset-0">
        <CommissionModal />
      </div>
    </section>
  );
}
