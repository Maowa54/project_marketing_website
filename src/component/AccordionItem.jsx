import { useState } from "react";

const Accordion = ({ title, children, index, isOpen, toggle }) => {
  return (
    <div className="mt-4 border w-full rounded"> {/* Ensure full width even when collapsed */}
      <div
        className="flex justify-between items-center p-4 text-sm md:text-base cursor-pointer"
        onClick={() => toggle(index)} // Toggle the accordion on click
      >
        <p className="font-semibold">{title}</p>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-45'}`}
        >
          {/* Using the new SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 md:w-5 md:h-5 text-[#4E2FDA] transition-transform duration-300"
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
      {/* When closed, we still maintain the full width of the container */}
      <div className={`p-4 text-xs ${isOpen ? 'block' : 'hidden'}`}>
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
    <div className="w-full"> {/* Ensure the accordion container is w-full */}
      <Accordion
        title="Proven Result"
        index={0}
        isOpen={openIndex === 0}
        toggle={toggleAccordion}
      >
        We have a track record of delivering tangible results for our clients. From increasing website traffic and improving search.
      </Accordion>

      <Accordion
        title="Customized Solutions"
        index={1}
        isOpen={openIndex === 1}
        toggle={toggleAccordion}
      >
        We believe that one size does not fit all when it comes to digital marketing. That's why we take the time to understand your SEO.
      </Accordion>

      <Accordion
        title="Dedicated Support"
        index={2}
        isOpen={openIndex === 2}
        toggle={toggleAccordion}
      >
        Your success is our top priority. That's why we provide dedicated support and guidance every step of the way to running SEO.
      </Accordion>
    </div>
  );
};

export default AccordionItem;
