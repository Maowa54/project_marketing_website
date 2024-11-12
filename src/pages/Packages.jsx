import TickMark from "../component/TickMark"

const Packages = () => {
    const sentence = "Compare Plan Suitable for Your Business";
  const words = sentence.split(" "); // Split sentence into individual words
  return (
    <div>
        <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
        <div>
          <p
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2"
            style={{ lineHeight: "1.3" }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100} // Delay each word slightly more than the previous
                className="inline-block mr-2" // Ensure words are inline with space between
              >
                {word}
              </span>
            ))}
          </p>
          <p
            data-aos="fade-up"
            className="text-gray-500 text-xs md:text-sm "
            style={{ lineHeight: "1.6" }}
          >
            Explore our blog to discover actionable insights, success stories,
            and expert advice that can help drive growth for your business.
          </p>
        </div>

        {/* Top Right Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
          className="absolute top-2 right-2 md:top-8 md:right-8  lg:-right-28  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
          alt="Slowly Spinning Star"
        />

        {/* Bottom Left Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
          className="absolute bottom- left-2 md:bottom-8 md:left-8  lg:-left-28 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
          alt="Slowly Spinning Star"
        />
      </div>
      <div className="md:px-8 lg:px-40  mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-12">
        {/* Card 1 */}
        <div
          data-aos="fade-right"
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-white"
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
          <div className="bg-[#ddd8f0] rounded-md mt-6 p-4">
            <p className="text-sm md:text-base font-medium">
              Service Include :
            </p>
            <div className="space-y-2 mt-2">
              <div className="flex items-center">
                <TickMark/>

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
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-white"
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
          <div className="bg-[#ddd8f0] rounded-md mt-6 p-4">
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

export default Packages
