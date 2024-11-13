import TickMark from "./TickMark"

const PackageCards = () => {
  return (
    <div>
       <div className="md:px-8 lg:px-40  mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#EDEAFB] py-12">
        {/* Card 1 */}
        <div
          data-aos="fade-right"
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-[#FFFFFF]"
        >
          <p className="font-semibold md:text-lg">Basic plan - Starter</p>
          <p className="text-xs md:text-sm text-gray-700 mt-2">
            Our SEO and Digital Marketing agency offers a range of pricing plans
            tailored
          </p>
          <hr className="border mt-4 border-gray-300" />
          <p className=" mt-6 text-xl md:text-2xl lg:text-5xl font-medium">
            $999{" "}
            <span className="text-sm font-normal text-gray-500">/monthly</span>{" "}
          </p>
          <div className="bg-[#F6F4FD] rounded-md mt-6 p-4">
            <p className="text-sm md:text-base font-medium">
              Service Include :
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center">
                <TickMark />

                <p className="text-xs md:text-sm">Keyword Research</p>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#4E2FDA] rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">One Page Optimization</p>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#4E2FDA] rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">Basic Analytics Reporting</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-xs md:text-sm mt-6">
            Small businesses or startups looking to establish their online
            presence.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-[#4E2FDA] text-white"
        >
          <p className="font-semibold md:text-lg">Standard plan - Growth</p>
          <p className="text-xs md:text-sm mt-2">
            Our SEO and Digital Marketing agency offers a range of pricing plans
            tailored
          </p>
          <hr className="border mt-4 border-gray-300" />
          <p className=" mt-6 text-xl md:text-2xl lg:text-5xl font-medium">
            $1999 <span className="text-sm font-normal">/monthly</span>{" "}
          </p>
          <div className="bg-[#684EE0] rounded-md mt-6 p-4">
            <p className="text-sm md:text-base font-medium">
              Service Include :
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-[#4E2FDA]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">Keyword Research</p>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-[#4E2FDA]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">One Page Optimization</p>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-[#4E2FDA]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">Basic Analytics Reporting</p>
              </div>
            </div>
          </div>
          <p className="text-xs md:text-sm mt-6">
            Small businesses or startups looking to establish their online
            presence.
          </p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-left"
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-[#FFFFFF]"
        >
          <p className="font-semibold md:text-lg">Premium Plan - Pro</p>
          <p className="text-xs md:text-sm text-gray-700 mt-2">
            Our SEO and Digital Marketing agency offers a range of pricing plans
            tailored
          </p>
          <hr className="border mt-4 border-gray-300" />
          <p className=" mt-6 text-xl md:text-2xl lg:text-5xl font-medium">
            $2999{" "}
            <span className="text-sm font-normal text-gray-500">/monthly</span>{" "}
          </p>
          <div className="bg-[#F6F4FD] rounded-md mt-6 p-4">
            <p className="text-sm md:text-base font-medium">
              Service Include :
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#4E2FDA] rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">Keyword Research</p>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#4E2FDA] rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">One Page Optimization</p>
              </div>

              <div className="flex items-center">
                <span className="w-4 h-4 bg-[#4E2FDA] rounded-full flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-xs md:text-sm">Basic Analytics Reporting</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-xs md:text-sm mt-6">
            Small businesses or startups looking to establish their online
            presence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PackageCards
