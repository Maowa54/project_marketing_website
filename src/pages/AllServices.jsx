import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useRef } from "react";
import ScrollToTopButton from "../component/ScrollToTopButton";
import { Link } from "react-router-dom";
import CircularProgress from "../component/CircularProgress";
import Team from "../component/Team";

const AllServices = () => {
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
            Our Best Services
          </p>
          <Link to="/" className=" hover:underline  text-xs md:text-sm">
            Home
          </Link>
          {" > "}
          <Link
            to="/allservices"
            className=" text-[#4E2FDA] hover:underline ml-1 text-xs md:text-sm"
          >
            Services
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-white md:px-8 lg:px-40 gap-4 py-12">
        <div
          data-aos="zoom-in"
          className="flex flex-col space-y-4 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
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
          className="flex flex-col justify-between space-y-4 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
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
          className="flex flex-col justify-between space-y-2 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
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
          className="flex flex-col justify-between space-y-4 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
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

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-between space-y-2 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
        >
          <p className="font-medium text-nowrap text-sm md:text-base">
            Content Marketing
          </p>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/icons/service-icon15.svg"
            alt="SEO Image"
            className="md:w-[100px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
          />
          <p className="text-gray-800 text-xs md:text-sm">
            We craft compelling content that educates, entertains, and inspires
            your audience, driving engagement and building brand loyalty.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-between space-y-4 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
        >
          <p className="font-medium text-sm md:text-base">Email Marketing </p>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/icons/service-icon16.svg"
            alt="PPC Image"
            className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
          />
          <p className="text-gray-800 text-xs md:text-sm">
            We design and implement effective email marketing campaigns to
            nurture leads, promote products or services, and drive conversions.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-between space-y-2 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
        >
          <p className="font-medium text-sm md:text-base text-nowrap mb-6">
            Analytics And Reporting{" "}
          </p>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/icons/service-icon17.svg"
            alt="Social Media Marketing Image"
            className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
          />
          <p className="text-gray-800 text-xs md:text-sm">
            We track and measure the performance of your digital marketing
            campaigns using advanced analytics tools.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-between space-y-4 md:space-y-8 bg-[#DDD2F3] rounded-md p-6 text-center "
        >
          <p className="font-medium text-sm md:text-base">
            One Page SEO Optimization{" "}
          </p>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/icons/service-icon18.svg"
            alt="Website Design Image"
            className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
          />
          <p className="text-gray-800 text-xs md:text-sm">
            We optimize key on-page elements of your website, including title
            tags, meta descriptions, headers, and content with your target
            keywords.
          </p>
        </div>
      </div>

      <div className="bg-white  md:py-6 px-6 md:px-16 lg:px-40">
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-6 mx-auto">
          {/* Left  Container */}
          <div className="left-content text-center lg:text-left md:px-4 flex flex-col items-center ">
            <div className="">
              <div className="w-5 h-[2px] bg-[#4E2FDA] mb-1 "></div>
              <p className="text-[#4E2FDA] mb-2 text-xs md:text-sm">
                Why Choose Us{" "}
              </p>
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-semibold "
                style={{ lineHeight: "1.3" }}
              >
                Experience the Advantage Why We're the Right Choice
              </p>{" "}
              <p
                id="text"
                data-aos="fade-right"
                className="mt-3 text-gray-500 text-xs md:text-sm transition-all "
              >
                At SEOC we understand that you have many options when it comes
                to digital marketing services. So why should you choose us? Here
                are a few reasons
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="mt-4 border w-full flex text-sm md:text-base p-4 space-x-4 rounded hover:bg-[#4E2FDA]  hover:text-white"
            >
              <div className=" flex  ">
                <div className="bg-[#DDD2F3]  rounded-full size-14 flex justify-center items-center">
                  <img
                    src="https://seoc-html-v2.vercel.app/assets/img/icons/works-icons7.svg"
                    className="size-7"
                    alt="SVG Icon"
                  />
                </div>
              </div>

              <div className="">
                <p className="font-semibold ">Proven Result</p>
                <p className="text-xs">
                  {" "}
                  We have a track record of delivering tangible results for our
                  clients. From increasing website traffic and improving search.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="mt-4 border w-full flex text-sm md:text-base p-4 space-x-4 rounded hover:bg-[#4E2FDA]  hover:text-white "
            >
              <div className=" flex  ">
                <div className="bg-[#DDD2F3]  rounded-full size-14 flex justify-center items-center">
                  <img
                    src="https://seoc-html-v2.vercel.app/assets/img/icons/works-icons8.svg"
                    className="size-7"
                    alt="SVG Icon"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold ">Customized Solutions</p>
                <p className="text-xs">
                  {" "}
                  We believe that one size does not fit all when it comes to
                  digital marketing. That's why we take the time to understand
                  your SEO.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="mt-4 border w-full flex text-sm md:text-base p-4 space-x-4 rounded hover:bg-[#4E2FDA]  hover:text-white"
            >
              <div className=" flex  ">
                <div className="bg-[#DDD2F3]  rounded-full size-14 flex justify-center items-center">
                  <img
                    src="https://seoc-html-v2.vercel.app/assets/img/icons/works-icons9.svg"
                    className="size-7"
                    alt="SVG Icon"
                  />
                </div>
              </div>

              <div>
                <p className="font-semibold "> Dedicated Support </p>
                <p className="text-xs">
                  {" "}
                  Your success is our top priority. That's why provide dedicated
                  support and guidance every step of the way to running seo.
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="center-content relative pt-24 pb-4 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/about-img6.png"
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
          <div className="right-content relative mt-4 md:mt-16 pt-6 flex justify-center lg:block">
            <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
              <img
                src="/assets/images/about-img5.png"
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

      <div className="pt-12 bg-white ">
        <div className="bg-black text-white flex items-center justify-center min-h-[200px] md:min-h-[400px] relative overflow-hidden ">
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

          <div className="p-6">
            <div className="flex flex-col items-center">
              <div className="w-5 h-[2px] bg-white mr-3 mb-1"></div>
              <p className="text-white mb-2 text-xs md:text-sm">Skills</p>
              <p className="text-xl md:text-3xl font-semibold">
                Our Skills
              </p>{" "}
              <CircularProgress />
            </div>
          </div>
        </div>
      </div>
  <div>
    <Team/>
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

export default AllServices;
