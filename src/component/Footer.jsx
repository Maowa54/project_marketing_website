import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white py-8 ">
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Contact Section */}
            <div className="space-y-4">
              <p className="font-medium text-lg md:text-2xl mb-4">SEOC</p>{" "}
              <p className="text-gray-500 font-thin leading-relaxed">
                By optimizing content, leveraging relevant keywords, and
                adhering to best practices, businesses can secure a prominent
                position (SEO).
              </p>

              <div className="flex  gap-3 mt-3">
  <a
    href="https://www.facebook.com/attireidyllbd/"
    aria-label="Facebook"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://whatsapp.com"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.instagram.com/attire_idyll/channel/"
    aria-label="Instagram"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.linkedin.com"
    aria-label="LinkedIn"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
  >
    <FaLinkedinIn />
  </a>
</div>

            </div>
            {/* Information Section */}
            <div>
              <p className="font-medium text-lg md:text-2xl mb-4">
                About Links
              </p>
              <ul className="space-y-4">
                {[
                  " Case Studies",
                  "Pricing Plans",
                  "Testimonials",
                  "Contact Us",
                  "Faq",
                ].map((item) => (
                  <li className="mb-1" key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:underline text-sm md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Customer Care Section */}
            <div className="space-y-4">
              <p className="font-medium text-lg md:text-2xl mb-4">
                Get In Touch
              </p>

              <a href="" className="flex  text-gray-500 hover:underline">
                <FaMapMarkerAlt className="mr-2 text-2xl" />{" "}
                {/* Adjust size here */}
                8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773
              </a>

              <a
                href="tel:+8801622185353"
                className="flex items-center mt-1 text-gray-500 hover:underline"
              >
                <FaPhoneAlt className="mr-2" /> +880 1622185353
              </a>
              <a
                href="mailto:help@gmail.com"
                className="flex items-center mt-1 text-gray-500 hover:underline"
              >
                <FaEnvelope className="mr-2" /> help@gmail.com
              </a>
            </div>
            {/* Newsletter Signup Section */}
            <div>
              <p className="font-medium text-lg md:text-2xl mb-4">
                Subscribe Now
              </p>
              <div className="relative mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-full pl-2 pr-16 py-2 focus:outline-none focus:ring-2 focus:ring-[#4E2FDA] transition duration-200"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#4E2FDA]  font-medium text-white rounded-full text-sm md:text-base px-2 py-1 flex items-center group transition-transform duration-300 ">
          <span className="relative z-20">Subscribe</span>
          <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-black transition-transform duration-300"
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
            className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-105"
            style={{ transformOrigin: "center" }}
          ></span>
        </button>
      </div>
      {/* Glow effects */}
      
    </div>
            </div>
          </div>
          {/* Footer Bottom Text */}
          <div className="mt-10 text-gray-700  text-base grid grid-cols-1 md:grid-cols-2">
            <div>
              <a href="https://expressitbd.net/" target="blank">
                {" "}
                <p className=" text-sm md:text-base ">
                  © 2024 , All Rights Reserved. Design By{" "}
                  <span className="font-airstrip font-semibold  text-blue-800  hover:text-blue-700">
                    Express{" "}
                    <span className="relative  font-sans text-base md:text-lg text-white font-bold bg-pink-700 px-1 mr-1">
                      IT
                      <span className="absolute w-0 h-0 border-l-[5px] border-l-transparent  border-r-transparent border-t-[5px] border-t-pink-700 right-0 top-full"></span>
                    </span>
                    bd
                  </span>
                </p>
              </a>
            </div>

            <div className="flex md:text-base text-sm lg:justify-end gap-4">
              <a href="" className="hover:text-blue-900">
                Terms & Conditions
              </a>
              <a href="" className="hover:text-blue-900">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
