import { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Accordion from "../component/Accordion";
import ScrollToTopButton from "../component/ScrollToTopButton";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "../component/Button";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import Works from "./Works";
import Services from "./Services";
import About from "./About";
import Packages from "./Packages";

const Index = () => {
  const sentence1 = "Elevate Your Brand with Expert SEO & Digital Marketing";
  const words1 = sentence1.split(" ");
  const sentence2 = "Benefits of SEO & Digital Marketing";
  const words2 = sentence2.split(" "); // Split sentence into individual words
  const sentence3 = " Ready to Take Your SEO to  The Next Level";
  const words3 = sentence3.split(" "); // Split sentence into individual words
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

        <div className="mt-2 md:mt-8  mx-auto relative px-6 lg:px-10 max-w-screen-xl">
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
                {words1.map((word, index) => (
                  <span
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 50} // Delay each word slightly more than the previous
                    className="inline-block mr-3" // Ensure words are inline with space between
                  >
                    {word}
                  </span>
                ))}
              </p>

              <p
                data-aos="fade-left"
                data-aos-delay="300"
                className=" mt-4 text-gray-500 text-xs md:text-sm"
              >
                Welcome to SEOC where we specialize in revolutionizing your
                online <br />
                presence through expert SEO and digital marketing solutions.
              </p>

              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="flex flex-col sm:flex-row justify-center lg:justify-start mt-2 sm:space-x-4 md:space-x-6"
              >
                {/* Start Ranking Now Button */}
                <div className="pt-[25px]">
                  {" "}
                  <Button text="Start Ranking Now" />
                </div>
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
                data-aos="zoom-in"
                className="h-[400px] lg:h-[500px] z-10 mx-auto lg:mx-0  overflow-hidden"
              />

              {/* Top Right arrow Overlay */}
              <img
                src="/assets/images/elements2.png"
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
                src="/assets/images/lite-icons1.svg"
                alt="Top Right Image"
                className="absolute md:top-44 top-6 right-0 w-20 lg:right-0 md:right-36  md:w-24 h-auto animate-bounce-slow"
              />

              {/* Bottom Left Arrow Overlay */}
              <img
                src="/assets/images/elements3.png"
                alt="Announcement"
                className="absolute  hidden md:flex w-auto h-auto lg:bottom-44 lg:left-12  md:bottom-32 md:right-[500px] z-0 "
              />
              {/* behind circle Overlay */}
              <img
                src="/assets/images/header-imgbg.png"
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
                className="absolute top-4 lg:top-6 md:left-44 left-2 lg:left-20 w-24 lg:w-24 h-auto animate-bounce-slow"
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
              src="/assets/images/brand-img1.png"
              alt="Google Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/assets/images/brand-img2.png"
              alt="Microsoft Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/assets/images/brand-img3.png"
              alt="Airbnb Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/assets/images/brand-img4.png"
              alt="Amazon Logo"
              className="object-contain w-20 md:w-24"
            />
            <img
              src="/assets/images/brand-img5.png"
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
        <About />
      </section>

      <section id="services" className="bg-[#F1E6F7]">
        <Services />
      </section>

      <section id="works" className="bg-[#F1E6F7] ">
        <Works />
      </section>
      <section id="packages" className="bg-[#F1E6F7] ">
        <Packages />
      </section>

      <section id="benefits" className="bg-[#F1E6F7] ">
        <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
          <div>
            <p
              className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
              style={{ lineHeight: "1.3" }}
            >
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
            </p>
            <p
              data-aos="fade-up"
              className="text-gray-500 text-xs md:text-sm "
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
        <Testimonials />
      </section>

      <section id="blogs" className="bg-[#F1E6F7] ">
        <Blogs />
      </section>

      <section id="contact" className="bg-[#F1E6F7] ">
        <Contact />
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
              {/* {text3.split(" ").map((word, index) => (
                <>
                  {word === "" ? (
                    <>
                      <span
                        key={index}
                        className="reveal-word inline-block mr-1"
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        {word}&nbsp;
                      </span>
                      <br />  
                    </>
                  ) : (
                    <span
                      key={index}
                      className="reveal-word inline-block mr-1"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  )}
                </>
              ))} */}
              {words3.map((word, index) => (
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

export default Index;
