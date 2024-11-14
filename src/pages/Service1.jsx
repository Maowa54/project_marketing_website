import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useRef } from "react";
import ScrollToTopButton from "../component/ScrollToTopButton";
import { Link } from "react-router-dom";
import About from "./About";

import {  FaEnvelope, FaPaperclip,  } from "react-icons/fa";
import BottomSection from "../component/BottomSection";
const Service1 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if the carousel has elements to rotate
      if (carouselRef.current && carouselRef.current.children.length > 1) {
        // Get the first child (logo) and move it to the end
        const firstChild = carouselRef.current.children[0];
        carouselRef.current.appendChild(firstChild.cloneNode(true));
        carouselRef.current.removeChild(firstChild);
      }
    }, 2000); // Adjust time (2000ms = 2 seconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);


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
            Search Engine Optimization
          </p>
          <Link to="/" className=" hover:underline  text-xs md:text-sm">
            Home
          </Link>
          {" > "}
          <Link
            to="/allservices"
            className=" hover:underline text-xs md:text-sm"
          >
            Services
          </Link>
          {" >"}
          <Link
            to="/service1"
            className="text-[#4E2FDA] hover:underline ml-1 text-xs md:text-sm"
          >
            SEO
          </Link>
        </div>
      </div>

      <div className="bg-white  md:py-6 px-6 md:px-16 lg:px-40">
        <About />
      </div>

      <div className="companies-logo border py-9 px-4 md:px-20 lg:px-40 bg-[#4E2FDA]">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Text Section */}
          <p className="md:text-lg text-white text-sm font-semibold text-center lg:text-left mb-4 lg:mb-0 col-span-12 lg:col-span-3">
            Trusted By <br />
            Top Companies
          </p>

          {/* Logo Carousel Container */}
          <div
            className="col-span-12 lg:col-span-9 grid grid-flow-col gap-6 overflow-x-auto"
            ref={carouselRef}
          >
            <img
              src="/assets/images/brand-img1.png"
              alt="Google Logo"
              className="object-contain w-20 md:w-24 logo-white"
            />
            <img
              src="/assets/images/brand-img2.png"
              alt="Microsoft Logo"
              className="object-contain w-20 md:w-24 logo-white"
            />

            <img
              src="/assets/images/brand-img3.png"
              alt="Airbnb Logo"
              className="object-contain w-20 md:w-24 logo-white"
            />
            <img
              src="/assets/images/brand-img4.png"
              alt="Amazon Logo"
              className="object-contain w-20 md:w-24 logo-white"
            />
            <img
              src="/assets/images/brand-img5.png"
              alt="FedEx Logo"
              className="object-contain w-20 md:w-24 logo-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-white  md:py-6 px-6 md:px-16 lg:px-56">
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-6 mx-auto">
          {/* Left Image Container */}
          <div className="left-image relative mt-4 md:mt-24 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/about-img6.png"
                alt="Man Holding Laptop"
                data-aos="slide-right"
                className="w-full h-full object-cover relative z-10 "
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrow z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements14.png"
              alt="Star"
              className="w-10 absolute top-9 md:top-16 lg:-top-10 right-2 animate-[spin_30s_linear_reverse_infinite]"
            />
          </div>

          {/* Center Content */}
          <div className="center-content relative pt-6 pb-4 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/service-img5.png"
                alt="Microsoft Logo"
                data-aos="slide-right"
                className="w-full h-full object-cover relative z-10 "
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrowing z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements15.png"
              alt="Galaxy"
              className="w-14 absolute bottom-2 md:bottom-8 right-0 md:right-0 lg:-left-2 object-cover animate-[spin_30s_linear_reverse_infinite] z-0"
            />
          </div>

          {/* Right  Container */}
          <div className="right-content text-center lg:text-left md:px-4 flex flex-col items-center pt-12 md:pt-36 ">
            <div className="">
              <div className="w-5 h-[2px] bg-[#4E2FDA] mb-1 "></div>
              <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
                SEO Service
              </p>
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-semibold "
                style={{ lineHeight: "1.3" }}
              >
                Keyword Research & Strategy
              </p>{" "}
              <p
                id="text"
                data-aos="fade-left"
                className="mt-3 text-gray-500 text-xs md:text-sm transition-all "
              >
                Welcome to SEOC, your trusted partner for comprehensive SEO and
                digital marketing solutions, with proven expertise and
                innovative strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  md:py-6 px-6 md:px-16 lg:px-56">
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-6 mx-auto">
          {/* Left Image Container */}
          <div className="left-content text-center lg:text-left md:px-4 flex flex-col items-center pt-12 md:pt-36 ">
            <div className="">
              <div className="w-5 h-[2px] bg-[#4E2FDA] mb-1 "></div>
              <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
                SEO Service
              </p>
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-semibold "
                style={{ lineHeight: "1.3" }}
              >
                Technical SEO{" "}
              </p>{" "}
              <p
                id="text"
                data-aos="fade-right"
                className="mt-3 text-gray-500 text-xs md:text-sm transition-all "
              >
                We optimize your website's content, ensuring it is relevant,
                engaging, and includes targeted keywords. We craft compelling
                meta titles and descriptions to improve click-through rates from
                search engine. <br /> We enhance your website's internal linking
                structure to improve navigation and distribute page authority.
              </p>
            </div>
          </div>

          {/* Center Content */}
          <div className="center-content relative pt-16 pb-4 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/service-img6.png"
                alt="Man Holding Laptop"
                data-aos="slide-left"
                className="w-full h-full object-cover relative z-10 "
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrow z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements14.png"
              alt="Star"
              className="w-10 absolute   lg:bottom-96 right-2 animate-[spin_30s_linear_reverse_infinite]"
            />
          </div>

          {/* Right  Container */}
          <div className="right-content relative mt-4 md:mt-10 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/service-img7.png"
                alt="Microsoft Logo"
                data-aos="slide-left"
                className="w-full h-full object-cover relative z-10 "
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrowing z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements15.png"
              alt="Galaxy"
              className="w-14 absolute bottom-6 md:bottom-14 right-0 md:right-0 lg:-left-2 object-cover animate-[spin_30s_linear_reverse_infinite] z-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-white  md:py-6 px-6 md:px-16 lg:px-56">
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-6 mx-auto">
          {/* Left Image Container */}
          <div className="left-image relative mt-4 md:mt-24 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/service-img8.png"
                alt="Man Holding Laptop"
                data-aos="slide-right"
                className="w-full h-full object-cover relative z-10 "
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrow z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements14.png"
              alt="Star"
              className="w-10 absolute top-9 md:top-16 lg:-top-10 right-2 animate-[spin_30s_linear_reverse_infinite]"
            />
          </div>

          {/* Center Content */}
          <div className="center-content relative pt-6 pb-4 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/service-img9.png"
                alt="Microsoft Logo"
                data-aos="slide-right"
                className="w-full h-full object-cover relative z-10 "
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrowing z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements15.png"
              alt="Galaxy"
              className="w-14 absolute bottom-2 md:bottom-8 right-0 md:right-0 lg:-left-2 object-cover animate-[spin_30s_linear_reverse_infinite] z-0"
            />
          </div>

          {/* Right  Container */}
          <div className="right-content text-center lg:text-left md:px-4 flex flex-col items-center pt-12 md:pt-32 ">
            <div className="">
              <div className="w-5 h-[2px] bg-[#4E2FDA] mb-1 "></div>
              <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
                SEO Service
              </p>
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-semibold "
                style={{ lineHeight: "1.3" }}
              >
                Content Creation & Optimization{" "}
              </p>{" "}
              <p
                id="text"
                data-aos="fade-left"
                className="mt-3 text-gray-500 text-xs md:text-sm transition-all "
              >
                We regularly publish blog posts and articles to keep your
                website fresh and relevant. We perform content audits to
                identify gaps and opportunities for optimization. <br /> We
                create engaging, informative content that resonates with your
                audience and is optimized for search engines. .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 custom-analyze bg-white">
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
              Competitor Analysis
            </p>

            <p
              data-aos="fade-up"
              className="text-white text-xs md:text-sm "
              style={{ lineHeight: "1.4" }}
            >
              Find the keywords your competitors rank for and analyze their{" "}
              <br />
              data insights to uncover their SEO strategy in one click
            </p>

            <div className="bg-white rounded md:rounded-full p-5 mt-6  gap-2 grid grid-cols-1 md:grid-cols-3">
              <div className="flex gap-1 ">
                <FaPaperclip className="text-gray-800 mt-3 text-sm" />
                <input
                  type="text"
                  placeholder="https://yoursite.com"
                  className="text-sm"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-1 ">
                <FaEnvelope className="text-gray-800 mt-3 text-sm" />
                <input
                  type="text"
                  placeholder="youremail@domain.com"
                  className="text-sm "
                  name=""
                  id=""
                />
              </div>
              <button
                id="button"
                data-aos=""
                className="bg-[#4E2FDA] relative overflow-hidden md:ms-auto text-xs md:text-sm font-medium text-white rounded-full  px-3 py-2 flex hover:-translate-y-1 items-center group transition-transform  w-fit duration-200"
              >
                <span className="relative z-20">Analyze Now</span>
                <div className="ml-1 flex items-center justify-center size-5 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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
              </button>{" "}
            </div>
            <div className="flex gap-4 mt-5">
              <p className="text-white  md:text-lg items-center mt-1 font-semibold">
                Try:
              </p>
              <button className="bg-white text-black  text-xs md:text-sm rounded-full py-2 px-3">
                Marketing
              </button>
              <button className="bg-white text-black  text-xs md:text-sm rounded-full py-2 px-3">
                Laptop
              </button>

              <button className="bg-white text-black  text-xs md:text-sm rounded-full py-2 px-3">
                iPhone
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center py-8  ">
          <div className="flex flex-col items-center">
            <div className="w-5 h-[2px] bg-[#4E2FDA] mr-24 mb-1"></div>
            <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
              Website Analysis
            </p>
            <p className="text-xl md:text-3xl font-semibold">
              Conduct Website Audience Analysis <br />
              And Explore Its Geography
            </p>{" "}
          </div>
          <div className="overflow-x-auto md:flex justify-center mt-12">
            <table className="table-auto w-full md:w-[70%] shadow-md">
              <thead className="bg-[#4E2FDA] text-white  text-sm md:text-base">
                <tr>
                  <th className="p-4 text-left">
                    <input type="checkbox" /> <span>Blanking</span>
                  </th>
                  <th className="p-4 text-center">Score</th>
                  <th className="p-4 text-center">Keyword</th>
                  <th className="p-4 text-center">Domain</th>
                  <th className="p-4 text-center">
                    Rank
                    <span className="inline-flex ml-1">
                      <i className="fas fa-sort-up ml-1"></i>
                      {/* Edit Icon - Font Awesome */}
                      <i className="fas fa-edit ml-2"></i>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm">
                <tr className="bg-gray-100">
                  <td className="text-left p-4">
                    <input type="checkbox" />{" "}
                    <span>
                      WOG PRIDE on the app store
                      <br />{" "}
                      <span className="text-xs ml-4 text-[#4E2FDA]">
                        https://www.daraz.com/gameing-laptops/
                      </span>
                    </span>
                  </td>
                  <td className=" p-4">85</td>
                  <td className=" p-4">Laptop</td>
                  <td className=" p-4">daraz.com</td>
                  <td className=" p-4">4</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="text-left p-4">
                    <input type="checkbox" />{" "}
                    <span>
                      SEO PRIDE on the app store
                      <br />{" "}
                      <span className="text-xs ml-4 text-[#4E2FDA]">
                        https://www.daraz.com/gameing-laptops/
                      </span>
                    </span>
                  </td>
                  <td className=" p-4">105</td>
                  <td className=" p-4">Laptop</td>
                  <td className=" p-4">daraz.com</td>
                  <td className=" p-4 ">3</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="text-left p-4">
                    <input type="checkbox" />{" "}
                    <span>
                      PRIDE on the app store
                      <br />{" "}
                      <span className="text-xs ml-4 text-[#4E2FDA]">
                        https://www.daraz.com/gameing-laptops/
                      </span>
                    </span>
                  </td>
                  <td className=" p-4">52</td>
                  <td className=" p-4">Laptop</td>
                  <td className=" p-4">daraz.com</td>
                  <td className=" p-4 ">5</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="text-left p-4">
                    <input type="checkbox" />{" "}
                    <span>
                      WOG on the Online store
                      <br />{" "}
                      <span className="text-xs ml-4 text-[#4E2FDA]">
                        https://www.daraz.com/gameing-laptops/
                      </span>
                    </span>
                  </td>
                  <td className=" p-4">65</td>
                  <td className=" p-4">Laptop</td>
                  <td className=" p-4">daraz.com</td>
                  <td className=" p-4 ">2</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        <div>
    <BottomSection/>
  </div>
    
    </div>
  );
};

export default Service1;
