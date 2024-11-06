import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Dropdown from "../component/Dropdown";
import Accordion from "../component/Accordion";

const Index = () => {
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
    {
      id: 4,
      text: "This company has truly exceeded our expectations. Their team is professional, responsive, and genuinely invested in helping us achieve our business goals. From innovative solutions to exceptional customer service, they go above and beyond in every project. Highly recommend them to anyone looking for a reliable partner in growth.",
      image:
        "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/team-img4.png",
      reviewer: "Alice Johnson",
    },
  ];

  // Duplicate the first two cards for seamless loop
  const extendedCards = [...cards, ...cards.slice(0, 2)];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only update the index after the card has fully centered
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % extendedCards.length;
        return nextIndex === 0 ? 0 : nextIndex; // Keep at 0 if nextIndex is 0
      });
    }, 2000); // Delay for 2 seconds to allow the card to be centered

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentIndex, extendedCards.length]);

  return (
    <div>
      <div>
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Ellipse-120.png"
          alt=""
          className="absolute top-40 left-0 animate-bounce-slow"
        />
      </div>

      <div className="mt-12 py-3 mx-auto relative px-6 lg:px-0 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Text Section */}
          <div className="mt-5 lg:mt-0 lg:py-24 lg:pl-24 text-center lg:text-left mb-8">
            <p className="text-blue-600 bg-[#D7CDF3] bg-opacity-40 mix-blend-multiply text-sm md:text-base py-1 px-3 inline-block rounded-lg">
              Top #1 SEO & Marketing Agency
            </p>
            <p className="my-4 text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Elevate Your Brand with Expert SEO & Digital Marketing
            </p>
            <p className="mt-4 text-gray-500 text-sm md:text-base">
              Welcome to SEOC where we specialize in revolutionizing your online
              presence through expert SEO and digital marketing solutions.
            </p>

            <div className="flex justify-center lg:justify-start mt-8 space-x-6">
              <button className="bg-[#4E2FDA] text-sm md:text-base lg:text-lg  font-medium text-white rounded-full px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Start Ranking Now</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <span
                  className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150"
                  style={{ transformOrigin: "center" }}
                ></span>
              </button>

              <button className="bg-white border border-[#4E2FDA] text-sm md:text-base lg:text-lg  font-medium hover:text-white text-[#4E2FDA] rounded-full px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Contact Now</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-[#4E2FDA] group-hover:bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-white group-hover:text-black transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end items-center lg:items-start">
            <div className="relative">
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-img1.png"
                alt="Portfolio"
                className="h-[400px] lg:h-[650px]  mx-auto lg:mx-0"
              />

              {/* Top Right Image Overlay */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-author-img2.png"
                alt="Top Right Image"
                className="absolute -top-6 right-4 w-24 lg:w-40 h-auto animate-move"
              />

              {/* Bottom Left Image Overlay */}
              <img
                src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/header-author-img1.png"
                alt="Announcement"
                className="absolute bottom-6 -left-10 lg:-left-44 w-40 lg:w-64 h-auto animate-move"
              />
            </div>

            {/* Small Bouncing Image at Top Left */}
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/sound-icons1.svg"
              alt="Announcement"
              className="absolute top-6 left-10 lg:left-40 w-24 lg:w-32 h-auto animate-bounce-slow"
            />
          </div>
        </div>
      </div>

      <div className="border bg-[#EDEAFB] bg-opacity-35">
        <div className="flex flex-col lg:flex-row items-center w-[85%] mx-auto">
          <p className="text-lg font-semibold text-center lg:text-left mb-4 lg:mb-0 lg:mr-8">
            Trusted By Top Companies
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start space-x-2 md:space-x-6">
            <img
              src="/assets/images/Google-Logo.wine.svg"
              alt="Google Logo"
              className="size-40 object-contain" // Set height to 40
            />
            <img
              src="/assets/images/images-removebg-preview (2).png"
              alt="Microsoft Logo"
              className="size-40  object-contain" // Set height to 40
            />
            <img
              src="/assets/images/Airbnb_Logo_Bélo.svg-removebg-preview.png"
              alt="Airbnb Logo"
              className="size-40  object-contain" // Set height to 40
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
              className="size-32 mt-6  object-contain" // Set height to 40
            />
            <img
              src="/assets/images/125_Fedex_logo_logos-512.png"
              alt="FedEx Logo"
              className="size-32 mt-3 object-contain" // Set height to 40
            />
          </div>
        </div>
      </div>

      <div className="border bg-[#F0E4FA] py-10">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-x-16 items-center w-[90%] mx-auto">
          <div className="relative">
            {/* Circular Image with Star */}
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/entertainer-presenting-tablet-from-sponsor-1.jpg"
              alt="Google Logo"
              className="h-[320px] w-[320px] md:h-[420px] md:w-[550px] rounded-full object-cover"
            />
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
              alt="Star"
              className="absolute bottom-0 -left-4 md:-left-8 w-10 h-10 md:w-16 md:h-16"
            />
          </div>

          <div className="text-center md:text-left px-4 md:px-0">
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Arc.png"
              alt="Arc"
              className="mx-auto md:mx-0"
            />
            <p className="my-4 text-xl md:text-2xl lg:text-4xl font-bold leading-snug">
              Comprehensive SEO & Digital Marketing Solutions.
            </p>
            <p className="mt-4 text-gray-500 text-sm md:text-base">
              Welcome to SEOC where we specialize in revolutionizing your online
              presence through expert SEO and digital marketing solutions.
            </p>

            <button className="bg-[#4E2FDA] relative overflow-hidden text-sm md:text-lg  font-medium text-white rounded-full mt-4 px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
              <span className="relative z-20">Learn More</span>
              <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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

          <div className="relative">
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Frame-1437254183.jpg"
              alt="Microsoft Logo"
              className="h-[320px] w-[320px] md:h-[550px] md:w-[500px] rounded-full object-cover "
            />
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Galaxy.png"
              alt="Galaxy"
              className="absolute -top-6 md:-top-10 -right-2 md:-right-12 h-[70px] w-[70px] md:h-[100px] md:w-[100px] rounded-full object-cover "
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md  mx-auto px-4 sm:px-8 py-8 mb-4">
          <div>
            <p
              className="font-semibold text-2xl md:text-4xl mb-4 leading-relaxed"
              style={{ lineHeight: "1.4" }}
            >
              Popular Digital Marketing Services to Build Your Business
            </p>
            <p
              className="text-gray-500 text-sm md:text-base"
              style={{ lineHeight: "1.6" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Top Right Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />

          {/* Bottom Left Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8  lg:-left-40 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  bg-[#F0E4FA] px-4 sm:px-12 lg:px-24 py-8">
          <div className="flex flex-col space-y-8 bg-[#FEBFDA] p-6 text-center">
            <p className="font-medium text-lg">
              Search Engine <br /> Optimization (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276180.png"
              alt="SEO Image"
              className="h-[120px] w-[120px] mx-auto"
            />
            <p className="text-gray-500 leading-relaxed text-sm pb-8 px-6">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>

          <div className="flex flex-col space-y-8 bg-[#CAC6FD] p-6 text-center">
            <p className="font-medium text-lg">
              Search Engine <br /> Optimization (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186.png"
              alt="SEO Image"
              className="h-[120px] w-[120px] mx-auto"
            />
            <p className="text-gray-500 leading-relaxed text-sm pb-8 px-6">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>

          <div className="flex flex-col space-y-8 bg-[#FFE8A4] p-6 text-center">
            <p className="font-medium text-lg">
              Search Engine <br /> Optimization (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276187.png"
              alt="SEO Image"
              className="h-[120px] w-[120px] mx-auto"
            />
            <p className="text-gray-500 leading-relaxed text-sm pb-8 px-6">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>

          <div className="flex flex-col space-y-8 bg-[#D4FFD6] p-6 text-center">
            <p className="font-medium text-lg">
              Search Engine <br /> Optimization (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276188.png"
              alt="SEO Image"
              className="h-[120px] w-[120px] mx-auto"
            />
            <p className="text-gray-500 leading-relaxed text-sm pb-8 px-6">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-2">
          <button className="bg-[#4E2FDA] relative overflow-hidden text-base md:text-lg  font-medium text-white rounded-full mt-4 px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
            <span className="relative z-20">View More Services</span>
            <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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

        <div className="relative 700text-center  max-w-screen-md mx-auto px-4 sm:px-8 py-8 mb-4">
          <div>
            <p
              className="font-semibold text-2xl my-6 md:text-4xl mb-4 leading-relaxed"
              style={{ lineHeight: "1.4" }}
            >
              Tailored Solutions, Proven Result and Exceptional Service{" "}
            </p>
            <p
              className="text-gray-500 text-sm md:text-base"
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
            className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />

          {/* Bottom Left Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8  lg:-left-40 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>

        <div className="grid grid-cols-12 gap-2 md:gap-6 lg:gap-12 w-[85%] mx-auto">
          <div className="lg:col-span-7 col-span-12 relative">
            <img
              src="/assets/images/JCG-ITSolutions-Landing.jpg"
              alt=""
              className="rounded-lg  h-[510px]"
            />
            <div className="absolute bottom-4 left-4 right-4 space-y-6 p-4 rounded-lg">
              <p className="font-semibold text-white text-sm md:text-base">
                Our Value
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white cursor-pointer">
                Explore Our Unique Value Proposition & How We Drive Business
                Growth
              </p>
              <p className=" text-white leading-relaxed text-sm mt-2">
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our approach is centered on understanding
                your business inside gg
              </p>
              <button className="bg-[#4E2FDA] relative overflow-hidden text-sm md:text-lg  font-medium text-white rounded-full mt-4 px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Learn More </span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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
            <div className="bg-[#C8BFF4] rounded-lg space-y-4 p-6">
              <div className="flex justify-between">
                {" "}
                <p className="font-semibold text-[#4E2FDA]"> Our Mission</p>
                <div className="ml-2 flex items-center justify-center size-10 bg-[#4E2FDA] rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 -rotate-45  text-white"
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
              </div>{" "}
              <p className="text-lg font-medium">
                {" "}
                We strive to be more than just a service provider; we aim to be
                trusted SEOC{" "}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our approach is centered on understanding
                your business inside gg
              </p>
            </div>
            <div className="bg-[#FEBFDA] rounded-lg   space-y-4 p-6">
              <div className="flex justify-between">
                {" "}
                <p className="font-semibold text-[#FB3189]"> Our Mission</p>
                <div className="ml-2 flex items-center justify-center size-10 bg-[#FB3189] rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 -rotate-45  text-white"
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
              </div>{" "}
              <p className="text-lg font-medium">
                {" "}
                We strive to be more than just a service provider; we aim to be
                trusted SEOC{" "}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We pride ourselves on delivering a value proposition that goes
                beyond expectations. Our approach is centered on understanding
                your business inside gg
              </p>
            </div>
          </div>
        </div>

        <div className="relative text-center my-6 max-w-screen-md mx-auto px-4 sm:px-8 py-8 mb-4">
          <div>
            <p
              className="font-semibold text-2xl md:text-4xl mb-4 leading-relaxed"
              style={{ lineHeight: "1.4" }}
            >
              Benefits of SEO & Digital Marketing
            </p>
            <p
              className="text-gray-500 text-sm md:text-base"
              style={{ lineHeight: "1.6" }}
            >
              By investing in strategic SEO and digital marketing initiatives,
              businesses can unlock a myriad of benefits.
            </p>
          </div>

          {/* Top Right Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />

          {/* Bottom Left Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8  lg:-left-40 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>

        <div>
          <Accordion />
        </div>

        <div className="relative text-center my-6 max-w-screen-md mx-auto px-4 sm:px-8 py-8 mb-4">
          <div>
            <p
              className="font-semibold text-2xl md:text-4xl mb-4 leading-relaxed"
              style={{ lineHeight: "1.4" }}
            >
              What Our Client Say On Google Reviews{" "}
            </p>
            <p
              className="text-gray-500 text-sm md:text-base"
              style={{ lineHeight: "1.6" }}
            >
              Don’t just take our word for it. Hear what our satisfied clients
              have to say about their experience partnering with SEOC{" "}
            </p>
          </div>

          {/* Top Right Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />

          {/* Bottom Left Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8  lg:-left-40 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>

    <div className="w-full mt-6 overflow-hidden">
      <div
        className="flex gap-6 transition-transform duration-500"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {extendedCards.map((card) => (
          <div key={card.id} className="md:w-[60%] w-full flex-shrink-0 flex border-2 border-blue-500 rounded-lg overflow-hidden md:flex-row flex-col">
            <div className="w-full md:w-1/2 p-6 bg-white items-center ">
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{card.text}</p>
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
    <p className="text-gray-800 font-semibold">{card.reviewer}</p>
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
            <div className="w-full md:w-1/2 ">
              <img
                src={card.image}
                alt="Card Image"
                className="object-cover h-96  w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

        <div className="relative text-center max-w-screen-md mx-auto px-4 my-6 sm:px-8 py-8 mb-4">
          <div>
            <p
              className="font-semibold text-2xl md:text-4xl mb-4 leading-relaxed"
              style={{ lineHeight: "1.4" }}
            >
              Insights & Innovations: Our Latest Blog Posts{" "}
            </p>
            <p
              className="text-gray-500 text-sm md:text-base"
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
            className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />

          {/* Bottom Left Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8  lg:-left-40 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>

        <div className="w-[90%] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src="/assets/images/bo-7-mon-hoc-nen-tang-ma-cac-hoc-vien-khoi-nganh-marketing.jpeg"
                alt="Card Image"
                className="w-full image h-72 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]"
              />
              <div className="absolute inset-0 bg-[#6b52d8] transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-65"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow bg-white rounded-lg shadow-lg">
              {/* Top Row: Author and Date */}
              <div className="flex justify-between mb-4">
                {/* Author Section */}
                <div className="flex items-center text-black text-sm">
                  <FaUserAlt className="mr-2 text-lg" />
                  <span>Sujon M.</span>
                </div>
                {/* Date Section */}
                <div className="flex items-center text-black text-sm">
                  <FaCalendarAlt className="mr-2 text-lg" />
                  <span>October 29, 2024</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-semibold mb-4">
                The Power of Social Media Marketing: How to Build Your…{" "}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Add Your Heading Text Here. The Power of PPC Advertising: How to
                Maximize Your ROI
              </p>

              {/* Read More Button */}
              <button className="relative font-semibold text-sm md:text-base rounded-full py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Read More</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src="/assets/images/Content-marketing-tools-1.jpg" // Adjusted path
                alt="Card Image"
                className="w-full h-72 image object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]"
              />
              <div className="absolute inset-0 bg-[#6b52d8] transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-65"></div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow bg-white rounded-lg shadow-lg">
              {/* Top Row: Author and Date */}
              <div className="flex justify-between mb-4">
                {/* Author Section */}
                <div className="flex items-center text-black text-sm">
                  <FaUserAlt className="mr-2 text-lg" />
                  <span>Sujon M.</span>
                </div>
                {/* Date Section */}
                <div className="flex items-center text-black text-sm">
                  <FaCalendarAlt className="mr-2 text-lg" />
                  <span>October 29, 2024</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-semibold mb-4">
                The Importance of SEO in Digital Marketing:A Comprehensive Guide{" "}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Add Your Heading Text Here. The Power of PPC Advertising: How to
                Maximize Your ROI
              </p>

              {/* Read More Button */}
              <button className="relative font-semibold rounded-full py-2 text-sm md:text-base flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Read More</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative overflow-hidden group">
              <img
                src="/assets/images/anh-1-17163656272611758241397.jpeg"
                alt="Card Image"
                className="w-full image h-72 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]"
              />
              <div className="absolute inset-0 bg-[#6b52d8] transition-transform duration-300 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-65"></div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow bg-white rounded-lg shadow-lg">
              {/* Top Row: Author and Date */}
              <div className="flex justify-between mb-4">
                {/* Author Section */}
                <div className="flex items-center text-black text-sm">
                  <FaUserAlt className="mr-2 text-lg" />
                  <span>Sujon M.</span>
                </div>
                {/* Date Section */}
                <div className="flex items-center text-black text-sm">
                  <FaCalendarAlt className="mr-2 text-lg" />
                  <span>October 29, 2024</span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-semibold mb-4">
                The Power of Content Marketing: How to Drive Engagement…{" "}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                Add Your Heading Text Here. The Power of PPC Advertising: How to
                Maximize Your ROI
              </p>

              {/* Read More Button */}
              <button className="relative text-sm md:text-base font-semibold rounded-full py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                <span className="relative z-20">Read More</span>
                <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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

        <div className="relative my-6 text-center max-w-screen-md mx-auto px-4 sm:px-8 py-8 mb-4">
          <div>
            <p
              className="font-semibold text-2xl md:text-4xl mb-4 leading-relaxed"
              style={{ lineHeight: "1.4" }}
            >
              Get In Touch With Us Today{" "}
            </p>
            <p
              className="text-gray-500 text-sm md:text-base"
              style={{ lineHeight: "1.6" }}
            >
              We’re here to help! If you have any questions or would like to
              discuss how our SEO and digital marketing services can benefit
              your business,{" "}
            </p>
          </div>

          {/* Top Right Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />

          {/* Bottom Left Star */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            className="absolute bottom-2 left-2 md:bottom-4 md:left-8  lg:-left-40 h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
            alt="Slowly Spinning Star"
          />
        </div>

        <div className="w-[90%] grid grid-cols-12 gap-6 mx-auto my-8">
          {/* Column that spans 5 columns on larger screens */}
          <div className="col-span-12 md:col-span-5 p-8 bg-[#4E2FDA] rounded-md ">
            <p className="text-xl font-medium md:text-3xl mb-6 text-white">
              Contact Info
            </p>
            <p className="text-white">
              We’re here to help! If you have any questions or would like to
              discuss how our SEO and digital marketing services can benefit
              your business.
            </p>
            <hr className="my-6 " />

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#6044DE] rounded-full p-3 mr-2">
                  <FaMapMarkerAlt className="text-xl text-white" />
                </div>
                <p className="text-white font-medium text-lg md:text-xl">
                  Our Location <br />
                  <span className="text-sm font-thin">
                    8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX
                    773
                  </span>
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-[#6044DE] rounded-full p-3 mr-2">
                  <FaPhoneAlt className="text-xl text-white" />
                </div>
                <p className="text-white font-medium text-lg md:text-xl">
                  Phone Number <br />
                  <span className="text-sm font-thin">+880 1625885658</span>
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-[#6044DE] rounded-full p-3 mr-2">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <p className="text-white font-medium text-lg md:text-xl mb-14">
                  Email Address <br />
                  <span className="text-sm font-thin ">help@gmail.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Column that spans 7 columns on larger screens */}
          <div className="col-span-12 md:col-span-7 p-8 bg-white rounded-md">
            <p className="text-xl font-medium md:text-3xl mb-6">Get In Touch</p>
            <p className="text-gray-600 mb-6">
              We’re here to help! If you have any questions or would like to
              discuss how our SEO and digital marketing services can benefit
              your business.
            </p>

            {/* Form Section */}
            <form className="space-y-6">
              {/* First Row: First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Second Row: Email Address & Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Third Row: Country Selector */}
              <div>
                <Dropdown />
              </div>

              {/* Fourth Row: Message Textarea */}
              <div>
                <textarea
                  placeholder="Your Message"
                  className="border border-gray-300 p-3 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button className="bg-[#4E2FDA] relative overflow-hidden text-base md:text-lg  font-medium text-white rounded-full px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
                  <span className="relative z-20">Free Consultation</span>{" "}
                  {/* Ensuring text is above the background */}
                  <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#4E2FDA] text-white flex items-center justify-center min-h-[450px] relative overflow-hidden">
        {/* Bottom Left Image */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/cta-bg2.png"
          alt="Bottom Left Background"
          className="absolute -bottom-16 left-0 size-80 object-contain animate-bounce-slow"
        />

        {/* Top Right Image */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/cta-bg1.png"
          alt="Top Right Background"
          className="absolute -top-14 right-0 size-80 object-contain animate-move"
        />

        <div className="text-center p-8">
          <p
            className="font-semibold text-4xl mb-4 leading-relaxed"
            style={{ lineHeight: "1.4" }}
          >
            Ready to Take Your SEO to <br /> The Next Level{" "}
          </p>

          <p className="text-white" style={{ lineHeight: "1.4" }}>
            Effective SEO strategies not only elevate a websites visibility but
            also drive <br /> targeted traffic, enhance user experience
          </p>

          {/* Wrapper for text and button */}
          <div className="flex flex-col items-center mt-12">
            <button className="bg-white   relative overflow-hidden text-base md:text-lg font-medium hover:bg-[#2E00FF] hover:text-white text-[#4E2FDA] rounded-full px-4 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1">
              <span className="relative z-20">Free Consultation</span>{" "}
              {/* Ensuring text is above the background */}
              <div className="ml-2 flex items-center justify-center w-8 h-8 bg-[#4E2FDA] group-hover:bg-white rounded-full relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-white group-hover:text-black transition-transform duration-300"
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
  );
};

export default Index;
