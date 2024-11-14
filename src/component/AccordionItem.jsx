import { useState } from "react";

const Accordion2 = ({ title, children, index, isOpen, toggle }) => {
  return (
    <div
      className={`mt-2 border border-white md:w-[400px] rounded   ${
        isOpen ? "bg-[#4E2FDA] text-white" : "bg-white text-black"
      }`} // Set fixed width (400px) and apply conditional background and text color
    >
      <div
        className="flex justify-between items-center p-4 text-sm md:text-base cursor-pointer"
        onClick={() => toggle(index)} // Toggle the accordion on click
      >
        <p className="font-semibold">{title}</p>
        <span
          className={`transform transition-transform  ${
            isOpen ? "-rotate-45" : "rotate-0"
          }`}
        >
          {/* Using the new SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 md:w-5 md:h-5 text- transition-transform "
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
        </span>
      </div>
      <div className={`px-4 pt-2 pb-4 text-xs ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

const AccordionItem = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set default open item to index 0

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between opening and closing
  };

  return (
    <div className="w-full max-w-[400px] mt-16 mr-10">
      {" "}
      {/* Set a fixed width for the parent container */}
      <Accordion2
        title="1. Customized Strategies"
        index={0}
        isOpen={openIndex === 0}
        toggle={toggleAccordion}
      >
        <span>
          We believe in transparency and provide regular updates and detailed
          reports on your campaign's progress. <br />
        </span>{" "}
        <br /> Ready to boost your online presence and drive more organic
        traffic to your website.{" "}
      </Accordion2>
      <Accordion2
        title="2. Transparent Reporting"
        index={1}
        isOpen={openIndex === 1}
        toggle={toggleAccordion}
      >
        <span>
          We keep you in the loop with detailed reports, so you can track your
          campaign's performance effortlessly.
          <br />
        </span>{" "}
        <br /> Take control of your digital strategy and watch your website's
        visibility soar with targeted, organic traffic.
      </Accordion2>
      <Accordion2
        title="3. Proven Results"
        index={2}
        isOpen={openIndex === 2}
        toggle={toggleAccordion}
      > <span>
           We deliver measurable success, helping you achieve significant growth and tangible outcomes for your business.

      <br />
    </span>{" "}
    <br />  From increasing traffic to improving conversions, our strategies bring real value to your brand.

      </Accordion2>

      <Accordion2
        title="4. Expert Team"
        index={3}
        isOpen={openIndex === 3}
        toggle={toggleAccordion}
      > <span>
        Our team consists of skilled professionals who are passionate about driving your success with their expertise.

      <br />
    </span>{" "}
    <br />    With years of experience and a collaborative approach, we’re here to help you navigate the digital landscape with confidence.


      </Accordion2>
    </div>
  );
};

export default AccordionItem;
