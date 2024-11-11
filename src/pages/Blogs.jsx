import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";
const Blogs = () => {
  const sentence = "Insights & Innovations: Our Latest Blog Posts";
  const words = sentence.split(" "); // Split sentence into individual words
  return (
    <div>
      <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
        <div>
          <p
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2"
            style={{ lineHeight: "1.3" }}
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
            className="text-gray-500 text-xs md:text-sm "
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
  );
};

export default Blogs;
