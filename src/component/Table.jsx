import TickMark from "../component/TickMark";

const Table = () => {
  return (
    <div>
         <table className="table-auto w-full ">
          <thead className="bg-[#E0E4E8] text-sm md:text-base">
            <tr>
              <th className="p-4 border border-gray-300 text-left">
                Key Features
              </th>
              <th className="p-4 border border-gray-300 ">Basic Plan</th>
              <th className="p-4 border border-[#4E2FDA] bg-[#4E2FDA] text-white ">
                Standard Plan
              </th>
              <th className="p-4 border border-gray-300 ">Premium Plan</th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm">
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Key Words Optimized
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">20 Keywords</td>
              <td className="p-4 border border-r-[#4E2FDA] ">40 Keywords</td>
              <td className="p-4 border border-gray-300">80 Keywords</td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Top 10 Rankings Guarantee
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">5 </td>
              <td className="p-4 border border-r-[#4E2FDA]">10 </td>
              <td className="p-4 border border-gray-300">20 </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Weekly Reporting
              </td>
              <td className="py-4 pl-[110px] border border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-gray-300">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">Support</td>
              <td className="p-4 border border-r-[#4E2FDA]">
                Email, Chat & Phone
              </td>
              <td className="p-4 border border-r-[#4E2FDA]">
                Email, Chat & Phone
              </td>
              <td className="p-4 border border-gray-300">
                Email, Chat & Phone
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Customized Presentation{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left font-semibold md:text-lg">
                On-Page Optimization{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]"></td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]"></td>
              <td className="py-4 pl-[110px] border  "></td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Website Analysis{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Competitor Analysis{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Keyword Research{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Structure Optimization{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Key Words Optimized
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">20 Pages</td>
              <td className="p-4 border border-r-[#4E2FDA] ">40 Pages</td>
              <td className="p-4 border border-gray-300">80 Pages</td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Google Analytics Installation{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Google Webmaster Tools Account{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left font-semibold md:text-lg">
                Off-Page Optimization{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]"></td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]"></td>
              <td className="py-4 pl-[110px] border  "></td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Web 2.0 Link Creation{" "}
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">15</td>
              <td className="p-4 border border-r-[#4E2FDA] ">25</td>
              <td className="p-4 border border-gray-300">40</td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Article Writing{" "}
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">4</td>
              <td className="p-4 border border-r-[#4E2FDA] ">6</td>
              <td className="p-4 border border-gray-300">10</td>
            </tr>

            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                YouTube Video Creation{" "}
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">2</td>
              <td className="p-4 border border-r-[#4E2FDA] ">5</td>
              <td className="p-4 border border-gray-300">10</td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                YouTube Video Promotion{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Links From Social Media{" "}
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  border-r-[#4E2FDA]">
                <TickMark />
              </td>
              <td className="py-4 pl-[110px] border  ">
                <TickMark />
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Free Blog Creation{" "}
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">5</td>
              <td className="p-4 border border-r-[#4E2FDA] ">10</td>
              <td className="p-4 border border-gray-300">20</td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left">
                Profile Page Creation{" "}
              </td>
              <td className="p-4 border  border-r-[#4E2FDA]">10</td>
              <td className="p-4 border border-r-[#4E2FDA] ">20</td>
              <td className="p-4 border border-gray-300">30</td>
            </tr>
            <tr className="odd:bg-white even:bg-[#F0F1F4] text-center">
              <td className="p-4 border border-gray-300 text-left"></td>
              <td className="py-4 pl-10 border    border-r-[#4E2FDA]">
                {" "}
                <button className="bg-[#4E2FDA]  relative overflow-hidden text-xs md:text-sm  font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 w-fit">
                  <span className="relative z-20">$999 /month</span>
                  <div className="ml-2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 md:w-5 md:h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <span
                    className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150"
                    style={{ transformOrigin: "center" }}
                  ></span>
                </button>
              </td>
              <td className="py-4 pl-10 border    border-r-[#4E2FDA]">
                {" "}
                <button className="bg-[#4E2FDA]  relative overflow-hidden text-xs md:text-sm  font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 w-fit">
                  <span className="relative z-20">$1999 /month</span>
                  <div className="ml-2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 md:w-5 md:h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <span
                    className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150"
                    style={{ transformOrigin: "center" }}
                  ></span>
                </button>
              </td>
              <td className="py-4 pl-10 border    border-r-[#4E2FDA]">
                {" "}
                <button className="bg-[#4E2FDA]  relative overflow-hidden text-xs md:text-sm  font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 w-fit">
                  <span className="relative z-20">$2999 /month</span>
                  <div className="ml-2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 md:w-5 md:h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <span
                    className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150"
                    style={{ transformOrigin: "center" }}
                  ></span>
                </button>
              </td>{" "}
            </tr>
          </tbody>
        </table>
      
    </div>
  )
}

export default Table
