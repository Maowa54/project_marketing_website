import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import ScrollToTopButton from "../component/ScrollToTopButton";
import TickMark from "../component/TickMark";
import Table from "../component/Table";
const Pricing = () => {
  const sentence2 = "Compare Plan Suitable for Your Business";
  const words2 = sentence2.split(" "); // Split sentence into individual words
  const sentence = " Ready to Take Your SEO to  The Next Level";
  const words = sentence.split(" "); // Split sentence into individual words

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 700, // Duration of animations
      once: false, // Trigger animations only once
    });

    // Refresh AOS when route changes or content updates
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <ScrollToTopButton />
      <div className="hero-section">
        <div className="bouncing-ball overflow-hidden ">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Ellipse-120.png"
            alt=""
            className="absolute top-32 -left-12 animate-bounce-slow size-32 md:size-40"
          />
        </div>
        <div className="overflow-hidden">
          {/* Top Right Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute top-28 right-[20px] size-5 md:size-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>
        <div className="text-center py-16">
          <p className="ltext-xl md:text-2xl lg:text-4xl font-semibold mb-4">
            Pricing Plan
          </p>
          <a href="/">
            Home > <span className="font-medium">Pricing Plan</span>{" "}
          </a>
        </div>
      </div>

      <div className="md:px-8 lg:px-40  mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white py-12">
        {/* Card 1 */}
        <div
          data-aos="fade-right"
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-[#EDEAFB]"
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
          className="rounded-md border p-5 overflow-hidden flex flex-col bg-[#EDEAFB]"
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

      <div className="bg-white text-center pt-6 pb-16 ">
        <div className="flex flex-col items-center">
          <div className="w-5 h-[2px] bg-[#4E2FDA] mb-1"></div>
          <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">Compare Plan</p>
          <p className="text-xl md:text-3xl font-semibold">
            {words2.map((word, index) => (
              <span
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 100} // Delay each word slightly more than the previous
                className="inline-block mr-2" // Ensure words are inline with space between
              >
                {word}
              </span>
            ))}
          </p>{" "}
        </div>
      </div>

      <div className="md:px-8 lg:px-40 bg-white overflow-x-auto">
        <Table />
      </div>

      <div className="pt-12 bg-white">
        <div className="bg-[#4E2FDA] text-white flex items-center justify-center min-h-[200px] md:min-h-[400px] relative overflow-hidden ">
          {/* Bottom Left Image */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/cta-bg2.png"
            alt="Bottom Left Background"
            className="absolute -bottom-16 left-0 size-40 md:size-80 object-contain animate-bounce-slow "
          />

          {/* Top Right Image */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/cta-bg1.png"
            alt="Top Right Background"
            className="absolute -top-10 right-0 size-40 md:size-80 object-contain animate-move"
          />

          <div className="text-center p-6">
            <p
              className="font-semibold text-xl lg:text-3xl mb-4 "
              style={{ lineHeight: "1.4" }}
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
              className="text-white text-xs md:text-sm "
              style={{ lineHeight: "1.4" }}
            >
              Effective SEO strategies not only elevate a websites visibility
              but also drive <br /> targeted traffic, enhance user experience
            </p>

            {/* Wrapper for text and button */}
            <div className="flex flex-col items-center mt-8">
              <button
                data-aos="fade-up"
                className="bg-white relative overflow-hidden text-xs md:text-sm mt-6 font-medium text-[#4E2FDA] hover:text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 w-fit "
              >
                <span className="relative z-20">Free Consultation</span>{" "}
                <div className="ml-2 flex items-center justify-center size-6 md:size-8 bg-[#4E2FDA] group-hover:bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 md:size-5 transform -rotate-45 group-hover:rotate-0 text-white group-hover:text-[#4E2FDA] transition-transform duration-300"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
