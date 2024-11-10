import Button from "../component/Button";

const Services = () => {
  return (
    <div>
      <div className="relative text-center max-w-screen-md py-20  mx-auto px-4 sm:px-8">
        <div>
          <p
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
            style={{ lineHeight: "1.3" }}
          >
            Popular Digital Marketing Services to Build Your Business
          </p>
          <p
            className="text-gray-500 text-xs md:text-sm fade-in-up"
            style={{ lineHeight: "1.6" }}
          >
            Our expert team specializes in delivering tailored solutions
            designed to elevate your brand and drive measurable results.
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-[#F0E4FA] md:px-8 lg:px-40 mt-4 pb-6">
  <div className="flex flex-col space-y-4 md:space-y-8 bg-[#FEBFDA] p-6 text-center zoom-in-animation">
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
      Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.
    </p>
  </div>

  <div className="flex flex-col space-y-4 md:space-y-8 bg-[#CAC6FD] p-6 text-center zoom-in-animation">
    <p className="font-medium text-sm md:text-base">
      Pay-Per-Click (PPC) Advertising
    </p>
    <img
      src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276186.png"
      alt="PPC Image"
      className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
    />
    <p className="text-gray-800 text-xs md:text-sm">
      Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.
    </p>
  </div>

  <div className="flex flex-col space-y-2 md:space-y-8 bg-[#FFE8A4] p-6 text-center zoom-in-animation">
    <p className="font-medium text-sm md:text-base text-nowrap mb-6">
      Social Media Marketing
    </p>
    <img
      src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276187.png"
      alt="Social Media Marketing Image"
      className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
    />
    <p className="text-gray-800 text-xs md:text-sm">
      Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.
    </p>
  </div>

  <div className="flex flex-col space-y-4 md:space-y-8 bg-[#D4FFD6] p-6 text-center zoom-in-animation">
    <p className="font-medium text-sm md:text-base">
      Website Design and Development
    </p>
    <img
      src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/Group-1171276188.png"
      alt="Website Design Image"
      className="md:w-[90px] w-[70px] mx-auto duration-300 ease-in-out transform hover:scale-x-[-1]"
    />
    <p className="text-gray-800 text-xs md:text-sm">
      Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure website.
    </p>
  </div>
</div>


      <div className="flex items-center justify-center">
        <Button text="View More Services" />
      </div>
    </div>
  );
};

export default Services;
