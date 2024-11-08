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
import { Link } from "react-router-dom";
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

      <div className="text-center p-6 md:p-12 ">
        <p className="text-xl md:text-3xl lg:text-6xl font-bold mb-6">
          About Us
        </p>
        <Link to="/" className="">
          ExpressITbd{" "}
        </Link>
        <span className="mx-2">></span>{" "}
        <span className="font-semibold">About Us</span>
      </div>

      <div className="flex flex-col bg-white mt-6 py-6  md:flex-row justify-between space-y-8 md:space-x-16 items-center px-20 mx-auto">
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

      <div className="border bg-[#4E2FDA] ">
        <div className="flex flex-col lg:flex-row items-center w-[85%] mx-auto">
          <p className="text-lg font-semibold text-white text-center lg:text-left mb-4 lg:mb-0 lg:mr-8">
            Trusted By Top Companies
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start space-x-2 md:space-x-8">
            <img
              src="/assets/images/brand9.png"
              alt="Google Logo"
              className="size-36 object-contain" // Set height to 40
            />
            <img
              src="/assets/images/brand10.png"
              alt="Microsoft Logo"
              className="size-36  object-contain" // Set height to 40
            />
            <img
              src="/assets/images/brand6.png"
              alt="Airbnb Logo"
              className="size-36  object-contain" // Set height to 40
            />
            <img
              src="/assets/images/brand7.png"
              alt="Amazon Logo"
              className="size-32 mt-4 object-contain" // Set height to 40
            />
            <img
              src="/assets/images/brand8.png"
              alt="FedEx Logo"
              className="size-32 mt-1 object-contain" // Set height to 40
            />
          </div>
        </div>
      </div>

      <div className="relative text-center my-8 max-w-screen-md mx-auto px-4 sm:px-8 py-8 ">
        <div>
          <p className="text-[#4E2FDA] font-medium">Our Value</p>
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
            beyond expectations. Our approach is centered on understanding your
            business inside
          </p>
        </div>

        {/* Top Right Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group.png"
          className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
          alt="Slowly Spinning Star"
        />

        {/* Bottom Left Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group.png"
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
      

      <div className="relative text-center my-6 max-w-screen-md mx-auto px-4 sm:px-8 py-8 ">
        <div>
          <p className="text-[#4E2FDA] font-medium">Testimonials</p>

          <p
            className="font-semibold text-2xl md:text-4xl mb-4 leading-relaxed"
            style={{ lineHeight: "1.4" }}
          >
            What Our Client Say
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
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group.png"
          className="absolute top-2 right-2 md:top-4 md:right-8  lg:-right-40  h-6 w-6 md:h-8 md:w-8 animate-[spin_9s_linear_infinite]"
          alt="Slowly Spinning Star"
        />

        {/* Bottom Left Star */}
        <img
          src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group.png"
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
            <div
              key={card.id}
              className="md:w-[60%] w-full flex-shrink-0 flex border-2 border-blue-500 rounded-lg overflow-hidden md:flex-row flex-col"
            >
              <div className="w-full md:w-1/2 p-6 mix-blend-multiply items-center ">
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {card.text}
                </p>
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

      <div className="bg-[#4E2FDA] text-white flex items-center justify-center min-h-[450px] relative overflow-hidden mt-6">
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
