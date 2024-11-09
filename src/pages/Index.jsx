import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Dropdown from "../component/Dropdown";
import Accordion from "../component/Accordion";
import ScrollToTopButton from "../component/ScrollToTopButton";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(false);

  // Intersection observer for text
  const observerText = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      delay: 200, // Delay between animations
      once: true, // Animation will happen only once
    });
  }, []);

  // Intersection observer for button
  const observerButton = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisibleButton(true);
    }
  };

  useEffect(() => {
    const textElement = document.getElementById("text");
    const buttonElement = document.getElementById("button");

    const textObserver = new IntersectionObserver(observerText, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    const buttonObserver = new IntersectionObserver(observerButton, {
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    textObserver.observe(textElement);
    buttonObserver.observe(buttonElement);

    return () => {
      textObserver.disconnect();
      buttonObserver.disconnect();
    };
  }, []);

  const cards = [
    {
      id: 1,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img1.png",
      reviewer: "John Doe",
    },
    {
      id: 2,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img2.png",
      reviewer: "Jane Doe",
    },
    {
      id: 3,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img3.png",
      reviewer: "John Smith",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the carousel index update
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only update the index after the card has fully centered
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length; // Use the length of the original cards
        return nextIndex;
      });
    }, 2000); // Delay for 2 seconds to allow the card to be centered

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentIndex]);

  // Handle indicator click manually
  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

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

  return (
    <div>
      <ScrollToTopButton />
      <div className="hero-section">
        <div className="bouncing-ball overflow-hidden ">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Ellipse-120.png"
            alt=""
            className="absolute top-32 -left-12 animate-bounce-slow size-32 md:size-40"
          />
        </div>

        <div className="mt-2 md:mt-12  mx-auto relative px-6 lg:px-10 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Text Section */}
            <div className="mt-5 lg:mt-0 lg:py-24 lg:pl-24 text-center  lg:text-left mb-8">
              <p className="text-blue-600 bg-[#D7CDF3] bg-opacity-40 mix-blend-multiply text-xs md:text-sm py-1 px-3 inline-block rounded-lg">
                Top #1 SEO & Marketing Agency
              </p>
              <p
                className="my-4 text-xl md:text-2xl lg:text-[2.8rem] font-semibold "
                style={{ lineHeight: "1.2" }}
              >
                Elevate Your Brand with Expert SEO & Digital Marketing
              </p>
              <p className="mt-4 text-gray-500 text-xs md:text-sm">
                Welcome to SEOC where we specialize in revolutionizing your
                online <br />
                presence through expert SEO and digital marketing solutions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-2 sm:space-x-4 md:space-x-6">
                {/* Start Ranking Now Button */}
                <button className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm mt-6 font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1  w-fit ">
                  <span className="relative z-20">Start Ranking Now</span>{" "}
                  <div className="ml-2 flex items-center justify-center size-6 md:size-8 bg-white rounded-full relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3 md:size-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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

                {/* Contact Now Button */}
                <button className="bg-transparent border border-[#4E2FDA] relative overflow-hidden w-fit text-xs md:text-sm mt-4 md:mt-6 font-medium text-[#4E2FDA] hover:text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 ">
                  <span className="relative z-20">Contact Now</span>{" "}
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

            {/* Hero Image Section */}
            <div className="relative flex justify-center items-center lg:items-start">
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-img1.png"
                alt="Portfolio"
                className="h-[400px] lg:h-[500px] z-10 mx-auto lg:mx-0"
              />

              {/* Top Right arrow Overlay */}
              <img
                src="/public/assets/images/elements2.png"
                alt="Top Right Image"
                className="absolute hidden md:flex md:right-80 md:top-2 lg:top-0 lg:right-36 w-14 lg:h-auto   "
              />

              {/* Top Right Image Overlay */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-author-img2.png"
                alt="Top Right Image"
                className="absolute md:-top-6 lg:-top-10 hidden md:flex  md:right-44 lg:right-2 w-20 md:w-28 lg:w-36 h-auto animate-element"
              />

              {/* Top Right Light Overlay */}
              <img
                src="/public/assets/images/lite-icons1.svg"
                alt="Top Right Image"
                className="absolute md:top-44 lg:top-56  md:right-40 w-20 lg:w-20 h-auto animate-bounce-slow"
              />

              {/* Bottom Left Arrow Overlay */}
              <img
                src="/public/assets/images/elements3.png"
                alt="Announcement"
                className="absolute  hidden md:flex w-auto h-auto lg:bottom-44 lg:left-12  md:bottom-32 md:right-[500px] z-0 "
              />
              {/* behind circle Overlay */}
              <img
                src="/public/assets/images/header-imgbg.png"
                alt="Announcement"
                className="absolute w-[270px] md:w-[300px] lg:w-[500px] h-auto left-[25px]  overflow-hidden lg:left-16 md:left-[320px] z-0 "
              />

              {/* Bottom Left Image Overlay */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-author-img1.png"
                alt="Announcement"
                className="absolute hidden md:flex bottom-0 lg:bottom-20 left-20 lg:-left-10 w-56 lg:w-44 h-auto animate-move"
              />

              {/* Small Bouncing mug at Top Left */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/sound-icons1.svg"
                alt="Announcement"
                className="absolute top-4 lg:top-6 right-[600px] lg:left-20 w-24 lg:w-24 h-auto animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="companies-logo border py-6 px-4 md:px-20 lg:px-40 bg-[#EDEAFB]">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Text Section */}
          <p className="md:text-lg text-sm font-semibold text-center lg:text-left mb-4 lg:mb-0 col-span-12 lg:col-span-3">
            Trusted By <br />
            Top Companies
          </p>

          {/* Logo Carousel Container */}
          <div
            className="col-span-12 lg:col-span-9 grid grid-flow-col gap-6 overflow-x-auto"
            ref={carouselRef}
          >
            <img
              src="/public/assets/images/brand-img1.png"
              alt="Google Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/public/assets/images/brand-img2.png"
              alt="Microsoft Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/public/assets/images/brand-img3.png"
              alt="Airbnb Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/public/assets/images/brand-img4.png"
              alt="Amazon Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/public/assets/images/brand-img5.png"
              alt="FedEx Logo"
              className="object-contain w-20 md:w-24"
            />
          </div>
        </div>
      </div>

      <section
        id="about"
        className="border md:py-6 px-6 md:px-16 lg:px-40 bg-[#F0E4FA]"
      >
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-12 mx-auto">
          {/* Left Image Container */}
          <div className="left-image relative mt-4 md:mt-16 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[300px] md:w-[320px] md:h-[450px] overflow-hidden rounded-full group">
              <img
                src="/public/assets/images/about-img1.png"
                alt="Man Holding Laptop"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrow z-20"></div>
            </div>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
              alt="Star"
              className="w-8 sm:w-10 absolute bottom-9 md:bottom-16 sm:bottom-24 left-2 animate-[spin_30s_linear_reverse_infinite]"
            />
          </div>

          {/* Center Content */}
          <div className="center-image text-center lg:text-left md:px-4 flex flex-col items-center lg:items-start">
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Arc.png"
              alt="Arc"
              className="w-20 md:w-36 animate-[spin_30s_linear_reverse_infinite] mt-8 md:mt-20"
            />
            <p
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 md:mt-6"
              style={{ lineHeight: "1.3" }}
            >
              Comprehensive SEO & Digital Marketing Solutions.
            </p>
            <p
              id="text"
              className={`mt-4 text-gray-500 text-xs md:text-base ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } transition-all duration-500 delay-100`}
            >
              Welcome to SEOC, your trusted partner for comprehensive SEO and
              digital marketing solutions, with proven expertise and innovative
              strategies.
            </p>
            <button
              id="button"
              className={`bg-[#4E2FDA] mt-4 text-white rounded-full px-4 py-2 flex items-center group text-xs md:text-sm transition-transform duration-200 ${
                isVisibleButton
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <span className="relative z-20">Learn More</span>
              <div className="ml-2 flex items-center justify-center w-7 h-7 bg-white rounded-full relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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

          {/* Right Image Container */}
          <div className="right-image relative pt-6 md:pt-44 pb-4 flex justify-center lg:block">
            <div className="relative  w-[210px] h-[300px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/public/assets/images/about-img2.png"
                alt="Microsoft Logo"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrowing z-20"></div>
            </div>
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements5.png"
              alt="Galaxy"
              className="w-24 md:w-40 absolute top-2 md:top-24 right-2 md:right-52 lg:-right-6 object-cover animate-[spin_30s_linear_reverse_infinite] z-0"
            />
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F1E6F7]">
        <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
              Popular Digital Marketing Services to Build Your Business
            </p>
            <p
              className="text-gray-500 text-xs md:text-sm"
              style={{ lineHeight: "1.6" }}
            >
              Our expert team specializes in delivering tailored solutions
              designed to elevate your brand and drive measurable results.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  bg-[#F0E4FA] md:px-8 lg:px-40 mt-4 pb-6">
          <div className="flex flex-col space-y-4 md:space-y-8 bg-[#FEBFDA] p-6 text-center">
            <p className="font-medium text-nowrap text-sm md:text-base">
              Search Engine Optimization <br />
              (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276180.png"
              alt="SEO Image"
              className="md:size-[90px] size-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />

            <p className="text-gray-800  text-xs md:text-sm ">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-8 bg-[#CAC6FD] p-6 text-center">
            <p className="font-medium text-sm md:text-base ">
              Pay-Per-Click (PPC) Advertising
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186.png"
              alt="SEO Image"
              className="md:size-[90px] size-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800  text-xs md:text-sm ">
              Reach your audience instantly and drive qualified leads with
              targeted PPC campaigns. Our experts craft compelling ad copy and
              optimize.
            </p>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-8 bg-[#FFE8A4] p-6 text-center">
            <p className="font-medium text-sm md:text-base text-nowrap mb-6">
              Social Media Marketing{" "}
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276187.png"
              alt="SEO Image"
              className="md:size-[90px] size-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800  text-xs md:text-sm  ">
              Build a strong brand presence and engage with your audience on
              social media platforms. We create strategic social media campaigns
              to boost brand.
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-8 bg-[#D4FFD6] p-6 text-center">
            <p className="font-medium text-sm md:text-base ">
              Website Design and Development{" "}
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276188.png"
              alt="SEO Image"
              className="md:size-[90px] size-[70px]  mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800  text-xs md:text-sm ">
              Make a lasting impression with a professionally designed and
              user-friendly website. Our web design and development services
              ensure website.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm  font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
            <span className="relative z-20">View More Services</span>
            <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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
      </section>

      <section id="works" className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
              Tailored Solutions, Proven Result and Exceptional Service{" "}
            </p>
            <p
              className="text-gray-500 text-xs md:text-sm"
              style={{ lineHeight: "1.6" }}
            >
              We pride ourselves on delivering a value proposition that goes
              beyond expectations. Our approach is centered on understanding
              your business inside
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

        <div className="grid grid-cols-12 gap-2 md:gap-6 lg:gap-12 md:px-8 lg:px-40 mx-auto mt-2 py-6">
          <div className="lg:col-span-7 col-span-12 relative group">
            {/* Image with hover effects */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/public/assets/images/service-img1.png"
                alt="Service Image"
                className="lg:h-[520px] h-[350px]  w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
              />
            </div>

            {/* Content */}
            <div className="absolute bottom-1 md:bottom-4 left-4 right-4 space-y-1 md:space-y-3 p-2 md:p-4 rounded-lg sm:w-full sm:p-4 sm:space-y-3 sm:left-0 sm:right-0 absolute lg:bottom-4 lg:left-4 lg:right-4 lg:space-y-3 lg:p-4 lg:rounded-lg">
              <p className="font-semibold text-white text-xs md:text-base">
                Our Value
              </p>
              <p className="text-base md:text-xxl lg:text-2xl font-semibold text-white cursor-pointer">
                Explore Our Unique Value Proposition & How We Drive Business
                Growth
              </p>
              <p className="text-white text-xs ">
                we're committed to delivering exceptional value to our clients.
                We understand that every business is unique, personalized
                approach to every project we undertake.
              </p>

              <button
                id="button"
                className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm font-medium text-white rounded-full mt-4 md:mt-8 pl-4 pr-2 py-1 md:py-2 flex hover:-translate-y-1 items-center group transition-transform duration-200"
              >
                <span className="relative z-20">Learn More</span>
                <div className="ml-2 flex items-center justify-center size-7 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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

          <div className="lg:col-span-5 col-span-12 space-y-4">
            <div className="bg-[#C8BFF4] rounded-lg space-y-4 p-6 group transition-all duration-300 hover:translate-y-[-0.5rem]">
              {/* Add 'group' class here */}
              <div className="flex justify-between">
                <p className="font-semibold text-[#4E2FDA] mt-6 text-sm md:text-base">
                  {" "}
                  Our Mission
                </p>
                <div className="ml-2 flex items-center justify-center size-10 bg-[#4E2FDA] rounded-full group-hover:scale-x-[-1]  transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-white transition-transform duration-300"
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
              </div>
              <p className="text-sm md:text-base font-medium">
                We strive to be more than just a service provider; we aim to be
                trusted SEOC
              </p>
              <p className="text-xs md:text-sm text-gray-600 ">
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our approach is centered on understanding
                your business inside.
              </p>
            </div>

            <div className="bg-[#FEBFDA] rounded-lg space-y-4 p-6 group transition-all duration-300 hover:translate-y-[-0.5rem]">
              {/* Add 'group' class here */}
              <div className="flex justify-between">
                <p className="font-semibold text-[#FB3189] text-sm md:text-base mt-6">
                  {" "}
                  Our Mission
                </p>
                <div className="ml-2 flex items-center justify-center size-10 bg-[#FB3189] rounded-full group-hover:scale-x-[-1] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-white transition-transform duration-300"
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
              </div>
              <p className="text-sm md:text-base font-medium">
                We strive to be more than just a service provider; we aim to be
                trusted SEOC
              </p>
              <p className="text-xs md:text-sm text-gray-600 ">
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our approach is centered on understanding
                your business inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
              Benefits of SEO & Digital Marketing{" "}
            </p>
            <p
              className="text-gray-500 text-xs md:text-sm"
              style={{ lineHeight: "1.6" }}
            >
              By investing in strategic SEO and digital marketing initiatives,
              businesses can unlock a myriad of benefits.
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

        <div>
          <Accordion />
        </div>
      </section>

      <section id="testimonials" className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-20 mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
              What Our Client Say On Google Reviews{" "}
            </p>
            <p
              className="text-gray-500 text-xs md:text-sm"
              style={{ lineHeight: "1.6" }}
            >
              Don't just take our word for it. Hear what our satisfied clients
              have to say about their experience partnering with SEOC
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

        <div className="w-full mt-6 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${(currentIndex * 100) / 2.5}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="md:w-[60%] w-full flex-shrink-0 flex border-2 border-blue-500 rounded-lg overflow-hidden md:flex-row flex-col justify-between"
              >
                <div className="w-full flex flex-col md:w-1/2 p-2 md:p-4 bg-white space-x-2">
                  {/* Topmost Text */}
                  <p className="text-gray-700  mt-2 text-xs md:text-sm">
                    {card.text}
                  </p>

                  {/* Bottom Section: Stars, Reviewer, and Google Icon */}
                  <div className="flex justify-between items-center w-full md:mt-auto mt-3">
                    <div className="flex flex-col items-start space-y-1 ">
                      {/* Five Star Review Icons */}
                      <div className="flex text-blue-800 space-x-1">
                        <i className="fas fa-star text-xs md:text-sm"></i>
                        <i className="fas fa-star text-xs md:text-sm"></i>
                        <i className="fas fa-star text-xs md:text-sm"></i>
                        <i className="fas fa-star text-xs md:text-sm"></i>
                        <i className="fas fa-star text-xs md:text-sm"></i>
                      </div>
                      {/* Reviewer Name */}
                      <p className="text-gray-800 text-sm md:text-base font-semibold">
                        {card.reviewer}
                      </p>
                    </div>

                    {/* Google Icon */}
                    <div>
                      <img
                        src="/assets/images/download.png"
                        alt="Google Icon"
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 ">
                  <img
                    src={card.image}
                    alt="Card Image"
                    className=" h-60 md:h-80 w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className="relative w-6 h-6"
              >
                {currentIndex === index && (
                  <div className="absolute w-6 h-6 rounded-full bg-gray-300 top-3 left-3 -translate-x-1/2 -translate-y-1/2"></div>
                )}
                <span
                  className={`w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    currentIndex === index ? "bg-blue-800" : "bg-gray-400"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
              Insights & Innovations: Our Latest Blog Posts{" "}
            </p>
            <p
              className="text-gray-500 text-xs md:text-sm"
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

        <div className="md:px-8 lg:px-40 md: mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {/* Card 1 */}
          <div className="rounded overflow-hidden flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src="/public/assets/images/blog-img1.png"
                alt="Card Image"
                className="w-full image object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
              />
              <div className="absolute bg-[#6b52d8] transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-65"></div>
            </div>
            <div className="pt-4 px-6 pb-2 flex flex-col justify-between  bg-white ">
              {/* Top Row: Author and Date */}
              <div className="flex justify-between mb-4 text-xs md:text-sm">
                {/* Author Section */}
                <div className="flex items-center text-black ">
                  <FaUserAlt className="mr-2 md:text-lg" />
                  <span>Ben Stokes</span>
                </div>
                {/* Date Section */}
                <div className="flex items-center text-black ">
                  <FaCalendarAlt className="mr-2 md:text-lg" />
                  <span>November 7, 2024</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className=" md:text-lg font-semibold mb-4">
                10 Essential SEO Tips to Boost Your Website's Ranking{" "}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Are you looking to improve your website's visibility and attract
                more organic traffic?
              </p>

              {/* Read More Button */}
              <button className="relative font-semibold rounded-full py-2 text-xs md:text-sm flex items-center group hover:text-[#472DBD] transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Read More</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black group-hover:text-[#472DBD] transition-transform duration-300"
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
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" rounded  overflow-hidden flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src="/public/assets/images/blog-img2.png"
                alt="Card Image"
                className="w-full  image object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
              />
              <div className="absolute inset-0 bg-[#6b52d8] transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-65"></div>
            </div>

            <div className="pt-4 px-6 pb-2 flex flex-col justify-between  bg-white ">
              {/* Top Row: Author and Date */}
              <div className="flex justify-between text-xs md:text-sm mb-4">
                {/* Author Section */}
                <div className="flex items-center text-black ">
                  <FaUserAlt className="mr-2 md:text-lg" />
                  <span>Sujon M.</span>
                </div>
                {/* Date Section */}
                <div className="flex items-center text-black ">
                  <FaCalendarAlt className="mr-2 md:text-lg" />
                  <span>November 3, 2024</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className=" md:text-lg font-semibold mb-4">
                The Importance of Responsive Web Design in the Mobile Age{" "}
              </h3>
              <p className="text-gray-500 text-sm mb-2 ">
                Where mobile devices dominate internet usage, responsive web
                design more crucial.
              </p>

              {/* Read More Button */}
              <button className="relative font-semibold rounded-full py-2 text-xs md:text-sm flex hover:text-[#472DBD] items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Read More</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black group-hover:text-[#472DBD]  transition-transform duration-300"
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
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded shadow overflow-hidden flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src="/public/assets/images/blog-img3.png"
                alt="Card Image"
                className="w-full image  object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
              />
              <div className="absolute inset-0 bg-[#6b52d8] transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-65"></div>
            </div>
            <div className="pt-4 px-6 pb-2 flex flex-col justify-between  bg-white rounded shadow">
              {/* Top Row: Author and Date */}
              <div className="flex justify-between mb-4 text-xs md:text-sm">
                {/* Author Section */}
                <div className="flex items-center text-black ">
                  <FaUserAlt className="mr-2 md:text-lg" />
                  <span>John Doe</span>
                </div>
                {/* Date Section */}
                <div className="flex items-center text-black ">
                  <FaCalendarAlt className="mr-2 md:text-lg" />
                  <span>November 1, 2024</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className=" md:text-lg font-semibold mb-4">
                The Power of PPC Advertising: How to Maximize Your ROI{" "}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                Add Your Heading Text Here. The Power of PPC Advertising: How to
                Maximize Your ROI
              </p>

              {/* Read More Button */}
              <button className="relative text-xs md:text-sm font-semibold rounded-full py-2 hover:text-[#472DBD] flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Read More</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black group-hover:text-[#472DBD] transition-transform duration-300"
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
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-20 mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
              Get In Touch With Us Today{" "}
            </p>
            <p
              className="text-gray-500 text-xs md:text-sm"
              style={{ lineHeight: "1.6" }}
            >
              We’re here to help! If you have any questions or would like to
              discuss how our SEO and digital marketing services can benefit
              your business,
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

        <div className="md:px-8 lg:px-40 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 mx-auto mt-2 py-2 md:py-4">
          {/* Contact Info Column */}
          <div className="col-span-12 md:col-span-5 py-8 px-4  md:px-8 bg-black bg-opacity-95 rounded-md">
            <p className=" font-medium md:text-lg mb-4 text-white">
              Contact Info
            </p>
            <p className="text-[#C1C1C2] text-xs md:text-sm mb-6">
              We’re here to help! If you have any questions or would like to
              discuss how our SEO and digital marketing services can benefit
              your business.
            </p>
            <hr className="border-gray-300 mt-6 mb-8" />

            <div className="space-y-8 ">
              {/* Address Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-gray-200 bg-opacity-15 hover:bg-[#472DBD] rounded-full p-4  mb-4 md:mb-0 mr-0 md:mr-6">
                  <FaMapMarkerAlt className="text-xl md:text-2xl text-white" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  Our Location <br />
                  <span className="text-xs  font-thin text-[#C1C1C2]">
                    8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX
                    773
                  </span>
                </p>
              </div>

              {/* Phone Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-gray-200 bg-opacity-15 hover:bg-[#472DBD] rounded-full p-4  mb-4 md:mb-0 mr-0 md:mr-6">
                  <FaPhoneAlt className="text-xl md:text-2xl text-white" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  Phone Number <br />
                  <span className="text-xs font-thin">
                    +880 1625885658
                  </span>{" "}
                  <br />
                  <span className="text-xs font-thin">+880 1625885658</span>
                </p>
              </div>

              {/* Email Section */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="bg-gray-200 bg-opacity-15 hover:bg-[#472DBD] rounded-full p-4  mb-4 md:mb-0 mr-0 md:mr-6">
                  <FaEnvelope className="text-xl md:text-2xl text-white" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  Email Address <br />
                  <span className="text-xs font-thin">help@gmail.com</span>{" "}
                  <br />
                  <span className="text-xs font-thin">help@gmail.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Get In Touch Column */}
          <div className="col-span-12 md:col-span-7 p-6 md:p-8 bg-white rounded-md">
            <p className="text-lg font-medium md:text-xl mb-4">Get In Touch</p>
            <p className="text-gray-600 text-xs md:text-sm mb-6">
              We’re here to help! If you have any questions or would like to
              discuss how our SEO and digital marketing services can benefit
              your business.
            </p>

            {/* Form Section */}
            <form className="space-y-4">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              {/* Second Row: Email Address & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              {/* Country Selector */}
              <div>
                <Dropdown />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Your Message"
                  className="border border-gray-300 p-3 text-xs md:text-sm rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button className="bg-[#4E2FDA] relative overflow-hidden text-xs  lg:text-sm font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 ">
                  <span className="relative z-20">Free Consultation</span>
                  <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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
            </form>
          </div>
        </div>
      </section>

      <div className="pt-12 bg-[#F1E6F7]">
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
              Ready to Take Your SEO to <br /> The Next Level{" "}
            </p>

            <p
              className="text-white text-xs md:text-sm"
              style={{ lineHeight: "1.4" }}
            >
              Effective SEO strategies not only elevate a websites visibility
              but also drive <br /> targeted traffic, enhance user experience
            </p>

            {/* Wrapper for text and button */}
            <div className="flex flex-col items-center mt-12">
              <button className="bg-white   relative overflow-hidden text-xs md:text-sm  font-medium hover:bg-[#2E00FF] hover:text-white text-[#4E2FDA] rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Free Consultation</span>{" "}
                {/* Ensuring text is above the background */}
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-[#4E2FDA] group-hover:bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-white group-hover:text-[#4E2FDA] transition-transform duration-300"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
