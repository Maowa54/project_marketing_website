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
      <ScrollToTopButton/>
      <div className="hero-section">
        <div className="bouncing-ball overflow-hidden ">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Ellipse-120.png"
            alt=""
            className="absolute top-32 -left-12 animate-bounce-slow size-32 md:size-40"
          />
        </div>

        <div className=" mt-12  mx-auto relative px-6 lg:px-10 max-w-screen-xl">
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

              <div className="flex justify-center lg:justify-start mt-2 space-x-6">
                <button className="bg-[#4E2FDA] relative overflow-hidden text-sm  mt-6 font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                  <span className="relative z-20">Start Ranking Now</span>{" "}
                  {/* Ensuring text is above the background */}
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
                    className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150" // Adjust duration here if needed
                    style={{ transformOrigin: "center" }}
                  ></span>
                </button>{" "}
                <button className="bg-transparent border border-[#4E2FDA] relative overflow-hidden text-sm mt-6 font-medium text-[#4E2FDA] hover:text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                  <span className="relative z-20">Contact Now</span>{" "}
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
                  <span
                    className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150" // Adjust duration here if needed
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
                className="absolute lg:top-0 lg:right-36 lg:w-14 lg:h-auto  w-10 -top-4 "
              />

              {/* Top Right Image Overlay */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-author-img2.png"
                alt="Top Right Image"
                className="absolute -top-10  right-0 w-20 lg:w-36 h-auto animate-element"
              />

              {/* Top Right Light Overlay */}
              <img
                src="/public/assets/images/lite-icons1.svg"
                alt="Top Right Image"
                className="absolute top-56  -right-4 w-20 lg:w-20 h-auto animate-bounce-slow"
              />

              {/* Bottom Left Arrow Overlay */}
              <img
                src="/public/assets/images/elements3.png"
                alt="Announcement"
                className="absolute   lg:w-auto lg:h-auto  w-14 bottom-44 left-12   z-0 "
              />
              {/* behind circle Overlay */}
              <img
                src="/public/assets/images/header-imgbg.png"
                alt="Announcement"
                className="absolute w-[500px] h-auto   left-16  z-0 "
              />

              {/* Bottom Left Image Overlay */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-author-img1.png"
                alt="Announcement"
                className="absolute bottom-20 left-40 lg:-left-10 w-40 lg:w-44 h-auto animate-move"
              />

              {/* Small Bouncing mug at Top Left */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/sound-icons1.svg"
                alt="Announcement"
                className="absolute top-6 left-10 lg:left-20 w-24 lg:w-24 h-auto animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="companies-logo border py-6 px-40 bg-[#EDEAFB]">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Text Section */}
          <p className="text-lg font-semibold text-center lg:text-left mb-4 lg:mb-0 col-span-12 lg:col-span-3">
            Trusted By <br />
            Top Companies
          </p>

          {/* Logo Carousel Container */}
          <div
            className="col-span-12 lg:col-span-9 grid grid-flow-col gap-6 "
            ref={carouselRef}
          >
            <img
              src="/public/assets/images/brand-img1.png"
              alt="Google Logo"
              className="object-contain  w-24"
            />
            <img
              src="/public/assets/images/brand-img2.png"
              alt="Microsoft Logo"
              className="object-contain   w-24"
            />
            <img
              src="/public/assets/images/brand-img3.png"
              alt="Airbnb Logo"
              className="object-contain  w-24"
            />
            <img
              src="/public/assets/images/brand-img4.png"
              alt="Amazon Logo"
              className="object-contain  w-24"
            />
            <img
              src="/public/assets/images/brand-img5.png"
              alt="FedEx Logo"
              className="object-contain  w-24"
            />
          </div>
        </div>
      </div>

      <div className="lg:px-40  bg-[#F0E4FA]  ">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-x-12    mx-auto">
          <div className=" left-image relative mt-16">
            <div className="relative  w-[320px] md:w-[320px] h-[350px] md:h-[450px] overflow-hidden rounded-full group">
              {/* Main Image */}
              <img
                src="/public/assets/images/about-img1.png"
                alt="Man Holding Laptop"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Diagonal Growing White Shadow Overlay with Skew */}
              <div className="absolute inset-0 bg-white opacity-0  group-hover:animate-fadeAndGrow  z-20"></div>
            </div>
            {/* Star Image */}
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
              alt="Star"
              className="size-14 bottom-64 left-1 animate-[spin_30s_linear_reverse_infinite] absolute "
            />
          </div>

          <div className="center-image text-center md:text-left md:px-4">
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Arc.png"
              alt="Arc"
              className="mx-auto size-36 md:mx-0 animate-[spin_30s_linear_reverse_infinite] mt-20"
            />
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold mt-6 "
              style={{ lineHeight: "1.3" }}
            >
              Comprehensive SEO & Digital Marketing Solutions.
            </p>
            <p
              id="text"
              className={`mt-4 text-gray-500 text-xs md:text-sm ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } transition-all duration-500 delay-100`}
            >
              Welcome to SEOC your trusted partner <br /> for comprehensive SEO
              and digital <br /> marketing solutions. With our proven expertise
              and innovative strategies in the digital landscape.
            </p>

            <button
              id="button"
              className={`bg-[#4E2FDA] relative overflow-hidden text-sm  font-medium text-white rounded-full mt-4 pl-4 pr-2 py-2 flex hover:-translate-y-1 items-center group transition-transform duration-200 ${
                isVisibleButton
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              } delay-200`}
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

          <div className="right-center relative pt-44 pb-4">
            <div className="relative h-[250px] w-[200px] md:h-[380px] md:w-[230px] overflow-hidden rounded-full group">
              <img
                src="/public/assets/images/about-img2.png"
                alt="Microsoft Logo"
                className="w-full h-full object-cover relative z-10 "
              />

              {/* Diagonal Growing White Shadow Overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrowing z-20"></div>
            </div>

            {/* Galaxy Image - Positioned outside, above the div */}
            <img
              src="https://seoc-html-v2.vercel.app/assets/img/elements/elements5.png"
              alt="Galaxy"
              className="absolute h-28 top-24 -right-6 object-cover animate-[spin_30s_linear_reverse_infinite] z-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-8  mx-auto px-4 sm:px-8">
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
          <div className="flex flex-col space-y-8 bg-[#FEBFDA] p-6 text-center">
            <p className="font-medium text-nowrap text-base">
              Search Engine Optimization <br />
              (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276180.png"
              alt="SEO Image"
              className="size-[90px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />

            <p className="text-gray-800  text-sm  ">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>

          <div className="flex flex-col space-y-8 bg-[#CAC6FD] p-6 text-center">
            <p className="font-medium text-base ">
              Pay-Per-Click (PPC) Advertising
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186.png"
              alt="SEO Image"
              className="size-[90px]  mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800  text-sm  ">
              Reach your audience instantly and drive qualified leads with
              targeted PPC campaigns. Our experts craft compelling ad copy and
              optimize.
            </p>
          </div>

          <div className="flex flex-col space-y-8 bg-[#FFE8A4] p-6 text-center">
            <p className="font-medium text-base text-nowrap mb-6">
              Social Media Marketing{" "}
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276187.png"
              alt="SEO Image"
              className="size-[90px]  mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800  text-sm  ">
              Build a strong brand presence and engage with your audience on
              social media platforms. We create strategic social media campaigns
              to boost brand.
            </p>
          </div>

          <div className="flex flex-col space-y-8 bg-[#D4FFD6] p-6 text-center">
            <p className="font-medium text-base ">
              Website Design and Development{" "}
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276188.png"
              alt="SEO Image"
              className="size-[90px]  mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800  text-sm  ">
              Make a lasting impression with a professionally designed and
              user-friendly website. Our web design and development services
              ensure website.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-[#4E2FDA] relative overflow-hidden text-sm   font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
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

        <div className="relative text-center max-w-screen-md py-6 mt-2 mx-auto px-4 sm:px-8">
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
      className="lg:h-[520px] w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
    />
  </div>

  {/* Content */}
  <div className="absolute bottom-4 left-4 right-4 space-y-3 p-4 rounded-lg sm:mt-4 sm:static sm:w-full sm:p-4 sm:space-y-3 sm:left-0 sm:right-0 lg:absolute lg:bottom-4 lg:left-4 lg:right-4 lg:space-y-3 lg:p-4 lg:rounded-lg">
    <p className="font-semibold text-white text-sm md:text-base">
      Our Value
    </p>
    <p className="text-lg md:text-xxl lg:text-2xl font-semibold text-white cursor-pointer">
      Explore Our Unique Value Proposition & How We Drive Business Growth
    </p>
    <p className="text-white text-sm mt-2">
      we're committed to delivering exceptional value to our clients. We
      understand that every business is unique, personalized approach to every
      project we undertake.
    </p>

    <button
      id="button"
      className="bg-[#4E2FDA] relative overflow-hidden text-sm font-medium text-white rounded-full mt-8 pl-4 pr-2 py-2 flex hover:-translate-y-1 items-center group transition-transform duration-200"
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

        <div className="relative text-center max-w-screen-md py-6 mt-2 mx-auto px-4 sm:px-8">
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

        <div className="relative text-center max-w-screen-md py-6 mt-4 mx-auto px-4 sm:px-8">
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
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="md:w-[60%] w-full flex-shrink-0 flex border-2 border-blue-500 rounded-lg overflow-hidden md:flex-row flex-col"
              >
                <div className="w-full md:w-1/2 p-6 bg-white items-center">
                  <p className="text-gray-700 mt-2 text-sm ">{card.text}</p>
                  <div className="flex justify-between items-center">
                    <div className="mt-5 space-y-2">
                      {/* Five Star Review Icons */}
                      <div className="flex text-blue-800">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      {/* Reviewer Name */}
                      <p className="text-gray-800 font-semibold">
                        {card.reviewer}
                      </p>
                    </div>
                    {/* Google Icon */}
                    <div className="items-center">
                      <img
                        src="/assets/images/download.png"
                        alt="Google Icon"
                        className="size-8"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={card.image}
                    alt="Card Image"
                    className="object-cover h-96 w-full"
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

        <div className="relative text-center max-w-screen-md py-6 mt-4 mx-auto px-4 sm:px-8">
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

        <div className="relative text-center max-w-screen-md py-6 mt-4 mx-auto px-4 sm:px-8">
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
      </div>

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
            Effective SEO strategies not only elevate a websites visibility but
            also drive <br /> targeted traffic, enhance user experience
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
