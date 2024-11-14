import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useRef } from "react";
import ScrollToTopButton from "../component/ScrollToTopButton";
import { Link } from "react-router-dom";

import Accordion from "../component/Accordion";
import Button from "../component/Button";
import BottomSection from "../component/BottomSection";
const Service4 = () => {
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
            Social Media Marketing{" "}
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
            to="/Service4"
            className="text-[#4E2FDA] hover:underline ml-1 text-xs md:text-sm"
          >
            Social Media Marketing{" "}
          </Link>
        </div>
      </div>

      <div className="bg-white pt-8 px-6 md:px-16">
  <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 lg:space-x-6 mx-auto">
    {/* Left Image Container with Icons */}
    <div className="relative flex justify-center items-center">
      {/* Social Media Icons */}
      <img
        src="https://seoc-html-v2.vercel.app/assets/img/elements/facebook1.png"
        alt="Facebook"
        className="absolute top-20 left-[100px] w-6 h-6 md:w-8 md:h-8"
      />
      <img
        src="https://seoc-html-v2.vercel.app/assets/img/elements/twitter1.png"
        alt="Twitter"
        className="absolute bottom-32 left-4 w-6 h-6 md:w-8 md:h-8"
      />
      <img
        src="https://seoc-html-v2.vercel.app/assets/img/elements/instagram1.png"
        alt="Instagram"
        className="absolute top-4 -right-[600px] w-6 h-6 md:w-14 md:h-14"
      />
      <img
        src="https://seoc-html-v2.vercel.app/assets/img/elements/linkedin1.png"
        alt="LinkedIn"
        className="absolute bottom-56 -right-[650px] w-6 h-6 "
      />

      {/* Foreground Image */}
      <img
                src="/assets/images/service-img11.png"
                className="h-[400px] md:h-[500px] lg:h-[550px] mx-auto z-10"
        alt="Service Image"
      />

      {/* Background Image */}
      <img
        src="https://seoc-html-v2.vercel.app/assets/img/bg/inner-bg1.png"
        alt="Background Shape"
        className="absolute w-[250px] md:w-[400px] lg:w-[500px] h-auto left-0 top-11 md:left-1/3 lg:left-16 z-0"
      />
    </div>

    {/* Right Container */}
    <div className="right-content lg:text-left md:px-4 flex flex-col justify-center items-center">
      <div>
        <div className="w-5 h-[2px] bg-[#4E2FDA] mb-1"></div>
        <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
          Social Media Marketing
        </p>
        <p
          className="text-xl sm:text-2xl lg:text-3xl font-semibold"
          style={{ lineHeight: "1.3" }}
        >
          Social Media Marketing
        </p>
        <p
          id="text"
          data-aos="fade-left"
          className="mt-3 text-gray-500 text-xs md:text-sm transition-all"
        >
          Welcome to SEOC’s Social Media Marketing Services. Our team
          specializes in crafting and executing social media strategies
          that elevate your brand, engage your audience, and drive
          measurable results. Harness the power of social media to grow
          your business and connect with customers on a deeper level.
        </p>
      </div>
      <div className="my-4 me-auto">
        <Button text="View Our Services" />
      </div>
    </div>
  </div>
</div>

      <div className="companies-logo border py-9 px-4 md:px-20 lg:px-40 bg-[#4E2FDA] z-20">
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

      <div>
        <div className="bg-white text-center py-8  ">
          <div className="flex flex-col items-center">
            <div className="w-5 h-[2px] bg-[#4E2FDA] mr-14 mb-1"></div>
            <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">Case Study</p>
            <p className="text-xl md:text-3xl font-semibold">
              SEOC Case Study
            </p>{" "}
          </div>
        </div>

        <div className="bg-white pb-8">
          <Accordion />
        </div>
      </div>

      <div className="bg-[#EDEAFB]">
        <div className=" text-center py-8  ">
          <div className="flex flex-col items-center">
            <div className="w-5 h-[2px] bg-[#4E2FDA] mr-14 mb-1"></div>
            <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
              Our Services
            </p>
            <p className="text-xl md:text-3xl font-semibold">
              Social Media Service
            </p>{" "}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:px-8 lg:px-40  pb-6">
          <div
            data-aos="zoom-in"
            className="flex flex-col space-y-4 md:space-y-8 bg-[#FEBFDA] p-6 text-center "
          >
            <p className="font-medium text-nowrap text-sm md:text-base">
              Search Engine Optimization <br />
              (SEO)
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276180.png"
              alt="SEO Image"
              className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800 text-xs md:text-sm">
              Enhance your online visibility & drive organic traffic with our
              advanced SEO techniques. We optimize your website to rank higher.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col space-y-4 md:space-y-8 bg-[#CAC6FD] p-6 text-center "
          >
            <p className="font-medium text-sm md:text-base">
              Pay-Per-Click (PPC) Advertising
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186.png"
              alt="PPC Image"
              className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800 text-xs md:text-sm">
              Reach your audience instantly and drive qualified leads with
              targeted PPC campaigns. Our experts craft compelling ad copy and
              optimize.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col space-y-2 md:space-y-8 bg-[#FFE8A4] p-6 text-center "
          >
            <p className="font-medium text-sm md:text-base text-nowrap mb-6">
              Social Media Marketing
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276187.png"
              alt="Social Media Marketing Image"
              className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800 text-xs md:text-sm">
              Build a strong brand presence and engage with your audience on
              social media platforms. We create strategic social media campaigns
              to boost brand.
            </p>
          </div>

          <div
            data-aos="zoom-in"
            className="flex flex-col space-y-4 md:space-y-8 bg-[#D4FFD6] p-6 text-center "
          >
            <p className="font-medium text-sm md:text-base">
              Website Design and Development
            </p>
            <img
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276188.png"
              alt="Website Design Image"
              className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
            />
            <p className="text-gray-800 text-xs md:text-sm">
              Make a lasting impression with a professionally designed and
              user-friendly website. Our web design and development services
              ensure website.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex items-center justify-center pb-6"
        >
          <Button text="View More Services" />
        </div>
      </div>

      <div>
        <BottomSection />
      </div>
    </div>
  );
};

export default Service4;
