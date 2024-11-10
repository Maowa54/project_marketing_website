import "animate.css";


const About = () => {
  return (
    <div>
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
            Comprehensive SEO & Digital Marketing Solutions.
          </p>
          <p
            id="text"
            className="mt-4 text-gray-500 text-xs md:text-base transition-all duration-500 delay-100 animate__animated animate__fadeInRight fade-in-right"
          >
            Welcome to SEOC, your trusted partner for comprehensive SEO and
            digital marketing solutions, with proven expertise and innovative
            strategies.
          </p>
          <button
            id="button"
            className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm mt-6 font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 w-fit animate__animated animate__fadeInRight fade-in-right"
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
    </div>
  );
};

export default About;
