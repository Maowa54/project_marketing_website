
import Team from "../component/Team";
import AccordionItem from "../component/AccordionItem";

import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

const BottomSection = () => {
    const sentence = " Ready to Take Your SEO to  The Next Level";
    const words = sentence.split(" "); // Split sentence into individual words
  
  return (
    <div className='overflow-hidden'>
       <div className="pt-12 custom-choose bg-[#EDEAFB]">
        <div className="bg-black  text-white flex items-center justify-center min-h-[200px] md:min-h-[400px] relative overflow-hidden ">
          {/* Bottom Left Image */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/cta-bg2.png"
            alt="Bottom Left Background"
            className="absolute -bottom-16 left-0 size-40 md:size-60 object-contain animate-bounce-slow "
          />

          {/* Top Right Image */}
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/cta-bg1.png"
            alt="Top Right Background"
            className="absolute -top-10 right-0 size-40 md:size-60 object-contain animate-move"
          />

          <div className="flex flex-col p-6 items-center">
            <div className="w-5 h-[2px] bg-white mr-20 mb-1"></div>
            <p className="text-white mb-2 text-xs md:text-sm">Why Choose Us</p>
            <p className="text-xl md:text-3xl font-semibold">
              Why Choose SEOC For SEO?
            </p>{" "}
            <div className="bg-black  md:py-16 px-6 md:px-16 lg:px-40">
              <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-6 mx-auto">
                {/* Left  Container */}
                <AccordionItem />

                {/* Center Content */}
                <div className="center-content relative pt-24 pb-4 flex justify-center lg:block">
                  <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
                    <img
                      src="/assets/images/service-img5.png"
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
          </div>
        </div>
      </div>

      <div className="pb-8 bg-white">
        <Team />
      </div>

      <div className="bg-[#EDEAFB]  py-8">
        <div className="flex flex-col items-center">
        <div className="w-5 h-[2px] bg-[#472DBD] mr-10 mb-1"></div>
            <p className=" mb-2 text-xs md:text-sm">Our Blog</p>
            <p className="text-xl md:text-3xl font-semibold">
            Our Latest Blog & News
            </p>{" "}

        </div>
      
      <div className="md:px-8 lg:px-40 md: mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {/* Card 1 */}
        <div
          data-aos="fade-right"
          className="rounded overflow-hidden flex flex-col "
        >
          <div className="relative overflow-hidden group">
            <img
              src="/assets/images/blog-img1.png"
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
        <div
          data-aos="fade-up"
          className=" rounded  overflow-hidden flex flex-col"
        >
          <div className="relative overflow-hidden group">
            <img
              src="/assets/images/blog-img2.png"
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
        <div
          data-aos="fade-left"
          className="rounded shadow overflow-hidden flex flex-col "
        >
          <div className="relative overflow-hidden group">
            <img
              src="/assets/images/blog-img3.png"
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
      </div>

      <div className="pt-6 bg-[#EDEAFB]  ">
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
  )
}

export default BottomSection
