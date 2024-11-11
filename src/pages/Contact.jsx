import Button from "../component/Button";
import Dropdown from "../component/Dropdown";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  const sentence = "Get In Touch With Us Today";
  const words = sentence.split(" "); // Split sentence into individual words
  return (
    <div>
      <div className="relative text-center max-w-screen-md py-20 mx-auto px-4 sm:px-8">
        <div>
          <p
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold py-2 "
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
            className="text-gray-500 text-xs md:text-sm"
            style={{ lineHeight: "1.6" }}
          >
            We’re here to help! If you have any questions or would like to
            discuss how our SEO and digital marketing services can benefit your
            business,
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

      <div className="md:px-8 lg:px-40 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 mx-auto mt-2 py-2 md:py-4">
        {/* Contact Info Column */}
        <div
          data-aos="zoom-out"
          className="col-span-12 md:col-span-5 py-8 px-4  md:px-8 bg-black bg-opacity-95 rounded-md "
        >
          <p className=" font-medium md:text-lg mb-4 text-white">
            Contact Info
          </p>
          <p className="text-[#C1C1C2] text-xs md:text-sm mb-6">
            We’re here to help! If you have any questions or would like to
            discuss how our SEO and digital marketing services can benefit your
            business.
          </p>
          <hr className="border-gray-300 mt-6 mb-8" />

          <div className="space-y-8 ">
            {/* Address Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-gray-200 bg-opacity-15 hover:bg-[#472DBD] rounded-full p-4  mb-4 md:mb-0 mr-0 md:mr-6">
                <FaMapMarkerAlt className="text-xl md:text-2xl text-white" />
              </div>
              <p className="text-white font-medium text-sm md:text-base">
                Our Location <br />
                <span className="text-xs  font-thin text-[#C1C1C2]">
                  8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773
                </span>
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-gray-200 bg-opacity-15 hover:bg-[#472DBD] rounded-full p-4  mb-4 md:mb-0 mr-0 md:mr-6">
                <FaPhoneAlt className="text-xl md:text-2xl text-white" />
              </div>
              <p className="text-white font-medium text-sm md:text-base">
                Phone Number <br />
                <span className="text-xs font-thin">+880 1625885658</span>{" "}
                <br />
                <span className="text-xs font-thin">+880 1625885658</span>
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="bg-gray-200 bg-opacity-15 hover:bg-[#472DBD] rounded-full p-4  mb-4 md:mb-0 mr-0 md:mr-6">
                <FaEnvelope className="text-xl md:text-2xl text-white" />
              </div>
              <p className="text-white font-medium text-sm md:text-base">
                Email Address <br />
                <span className="text-xs font-thin">help@gmail.com</span> <br />
                <span className="text-xs font-thin">help@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Get In Touch Column */}
        <div
          data-aos="zoom-out"
          className="col-span-12 md:col-span-7 p-6 md:p-8 bg-white rounded-md "
        >
          <p className="text-lg font-medium md:text-xl mb-4">Get In Touch</p>
          <p className="text-gray-600 text-xs md:text-sm mb-6">
            We’re here to help! If you have any questions or would like to
            discuss how our SEO and digital marketing services can benefit your
            business.
          </p>

          {/* Form Section */}
          <form className="space-y-4">
            {/* First Row: First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* Second Row: Email Address & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border text-xs md:text-sm border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {/* Country Selector */}
            <div>
              <Dropdown />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-3 text-xs md:text-sm rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <Button text="Free Consultation" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
