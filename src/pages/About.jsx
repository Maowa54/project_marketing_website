import "animate.css";
import Button from "../component/Button";

const About = () => {
  const sentence = "Comprehensive SEO & Digital Marketing Solutions";
  const words = sentence.split(" "); // Split sentence into individual words
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-12 mx-auto">
        {/* Left Image Container */}
        <div className="left-image relative mt-4 md:mt-16 flex justify-center lg:block">
          <div className="relative  w-[300px] h-[400px] md:w-[320px] md:h-[450px] overflow-hidden rounded-full group">
            <img
              src="/assets/images/about-img1.png"
              alt="Man Holding Laptop"
              data-aos="slide-right"
              className="w-full h-full object-cover relative z-10 "
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrow z-20"></div>
          </div>
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Star.png"
            alt="Star"
            className="w-8 md:w-14 absolute bottom-9 md:bottom-16 lg:bottom-24 left-0 animate-[spin_30s_linear_reverse_infinite]"
          />
        </div>

        {/* Center Content */}
        <div className="center-image text-center lg:text-left md:px-4 flex flex-col items-center lg:items-start ">
          <img
            src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Arc.png"
            alt="Arc"
            className="w-20 md:w-36 animate-[spin_30s_linear_reverse_infinite] mt-8 md:mt-20"
          />
          <p
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 md:mt-6"
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
            id="text"
            data-aos="fade-left"
            className="mt-4 text-gray-500 text-xs md:text-base transition-all "
          >
            Welcome to SEOC, your trusted partner for comprehensive SEO and
            digital marketing solutions, with proven expertise and innovative
            strategies.
          </p>
          <button
            id="button"
            data-aos="fade-left"
            className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm font-medium text-white rounded-full  mt-4 pl-4 pr-2 py-1 md:py-2 flex hover:-translate-y-1 items-center group transition-transform  duration-200"
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
          </button>{" "}
        </div>

        {/* Right Image Container */}
        <div className="right-image relative pt-12 md:pt-44 pb-4 flex justify-center lg:block">
          <div className="relative  w-[230px] h-[320px]  md:w-[230px] md:h-[380px] overflow-hidden rounded-full group">
            <img
              src="/assets/images/about-img2.png"
              alt="Microsoft Logo"
              data-aos="slide-right"
              className="w-full h-full object-cover relative z-10 "
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-fadeAndGrowing z-20"></div>
          </div>
          <img
            src="https://seoc-html-v2.vercel.app/assets/img/elements/elements5.png"
            alt="Galaxy"
            className="w-28 md:w-40 absolute top-2 md:top-24 right-2 md:right-52 lg:-right-6 object-cover animate-[spin_30s_linear_reverse_infinite] z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
