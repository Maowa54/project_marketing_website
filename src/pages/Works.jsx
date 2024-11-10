const Works = () => {
  return (
    <div>
      <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
        <div>
          <p
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
            style={{ lineHeight: "1.3" }}
          >
            Tailored Solutions, Proven Result and Exceptional Service{" "}
          </p>
          <p
            className="text-gray-500 text-xs md:text-sm fade-in-up"
            style={{ lineHeight: "1.6" }}
          >
            We pride ourselves on delivering a value proposition that goes
            beyond expectations. Our approach is centered on understanding your
            business inside
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
        <div className="lg:col-span-7 col-span-12 relative group zoom-in-animation">
          {/* Image with hover effects */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/public/assets/images/service-img1.png"
              alt="Service Image"
              className="lg:h-[520px] h-[350px]  w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
            />
          </div>

          {/* Content */}
          <div className=" bottom-1 md:bottom-4 left-4 right-4 space-y-1 fade-in-up md:space-y-3 p-2 md:p-4 rounded-lg sm:w-full sm:p-4 sm:space-y-3 sm:left-0 sm:right-0 absolute lg:bottom-4 lg:left-4 lg:right-4 lg:space-y-3 lg:p-4 lg:rounded-lg">
            <p className="font-semibold text-white text-xs md:text-base">
              Our Value
            </p>
            <p className="text-base md:text-xxl lg:text-2xl font-semibold text-white cursor-pointer">
              Explore Our Unique Value Proposition & How We Drive Business
              Growth
            </p>
            <p className="text-white text-xs ">
              we're committed to delivering exceptional value to our clients. We
              understand that every business is unique, personalized approach to
              every project we undertake.
            </p>

            <button
              id="button"
              className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm font-medium text-white rounded-full mt-4 md:mt-8 pl-4 pr-2 py-1 md:py-2 flex hover:-translate-y-1 items-center group transition-transform duration-200"
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
          <div className="bg-[#C8BFF4] rounded-lg space-y-4 p-6 group fade-in-down transition-all duration-300 hover:translate-y-[-0.5rem]">
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

          <div className="bg-[#FEBFDA] rounded-lg space-y-4 p-6 group transition-all fade-in-up duration-300 hover:translate-y-[-0.5rem]">
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
    </div>
  );
};

export default Works;
