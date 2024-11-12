import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky header
  const [showHeader, setShowHeader] = useState(false); // State to control header appearance on scroll

  const menuItems = [
    { name: "About", target: "#about" },
    { name: "Services", target: "#services" },
    { name: "Works", target: "#works" },
    { name: "Packages", target: "#packages" }, // Packages link after Works
    { name: "Testimonials", target: "#testimonials" },
    { name: "Blogs", target: "#blogs" },
    { name: "Contact", target: "#contact" },
  ];

  // Check the scroll position and toggle the sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // When scrolled down by 50px or more
        setIsSticky(true);
        setShowHeader(true); // Show header when scrolling
      } else {
        setIsSticky(false);
        setShowHeader(false); // Hide header when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` lg:px-24 py-2 md:py-3 mx-auto transition-all duration-700 ease-in-out ${
        isSticky ? "w-full bg-white fixed top-0 left-0 z-50 shadow-md" : ""
      } ${showHeader ? "top-0" : "-top-20"}`} // Control the top position for scroll animation
    >
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="/assets/images/expressit-Plus.png"
              alt="ExpressITbd Logo"
              className="h-8 md:h-14 md:w-44"
            />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex text-gray-700 text-base space-x-2 font-medium">
      {menuItems.map((item) =>
        item.name === "Packages" ? (
          // Packages with dropdown
          <div
            key={item.name}
            className="relative px-3 py-2 text-sm hover:bg-[#4E2FDA] hover:text-white transition-colors duration-300 rounded"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a
              href={item.target}
              className="flex items-center"
            >
              {item.name}
              <svg
                className="ml-1 w-4 h-4 transform transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white border rounded shadow-lg w-40 z-10">
                <a
                  href="/pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-[#4E2FDA] transition-colors duration-300"
                >
                  Pricing Plan
                </a>
              </div>
            )}
          </div>
        ) : (
          // Regular items
          <a
            href={item.target}
            key={item.name}
            className="px-3 py-2 text-sm hover:bg-[#4E2FDA] hover:text-white transition-colors duration-300 rounded"
          >
            {item.name}
          </a>
        )
      )}
    </nav>
        <button className="bg-[#4E2FDA] hidden relative overflow-hidden text-sm font-medium text-white rounded-full pl-4 pr-2 py-2 lg:flex items-center group transition-transform duration-300 hover:-translate-y-1">
          <span className="relative z-20">Free Consultation</span>{" "}
          <div className="ml-2 flex items-center justify-center w-8 h-8 bg-white rounded-full relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col max-h-screen overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <a href="/">
              <img
                src="/assets/images/expressit-Plus.png"
                alt="ExpressITbd Logo"
                className="h-8 md:h-12 w-40"
              />
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 bg-[#4E2FDA] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Mobile Menu Items */}
           {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col max-h-screen overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <a href="/">
              <img
                src="/assets/images/expressit-Plus.png"
                alt="ExpressITbd Logo"
                className="h-8 md:h-12 w-40"
              />
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 bg-[#4E2FDA] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <a
            href="/"
            className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b transition-colors duration-300"
          >
            Home
          </a>

          {menuItems.map((item, index) => (
            item.name === "Packages" ? (
              <div key={index}>
                <div
                  onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                  className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b cursor-pointer flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <span className="ml-2">{isPackagesOpen ? "-" : "+"}</span> {/* Toggle "+" */}
                </div>
                {/* Show submenu when Packages is clicked */}
                {isPackagesOpen && (
                  <div className="pl-8">
                    <a
                      href="/pricing"
                      className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b transition-colors duration-300"
                    >
                      Pricing Plan
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={item.target}
                onClick={() => setIsOpen(false)}
                className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b transition-colors duration-300"
              >
                {item.name}
              </a>
            )
          ))}

          <div className="mx-auto">
            <button
              id="button"
              className="bg-[#4E2FDA] relative overflow-hidden text-sm font-medium text-white rounded-full mt-4 px-6 py-2 flex items-center group transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="relative z-20">Get Started</span>
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
                className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150 z-0"
                style={{ transformOrigin: "center" }}
              ></span>
            </button>
          </div>

          {/* Contact Info and Social Links */}
          <div className="my-4 px-6 py-3 space-y-4">
            <div>
              <p className="text-lg font-semibold">Contact Info</p>
              <div className="flex mt-2">
                <FaPhoneAlt className="text-sm" />
                <p className="ml-2 text-xs">+880 1625885658</p>
              </div>
              <div className="flex mt-2">
                <FaEnvelope className="text-sm" />
                <p className="ml-2 text-xs">help@gmail.com</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">Our Location</p>
              <div className="flex mt-2">
                <FaMapMarkerAlt className="text-sm" />
                <p className="ml-2 text-xs">
                  8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">Social Links</p>
              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.facebook.com/attireidyllbd/"
                  aria-label="Facebook"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://whatsapp.com"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaTwitter className="text-sm" />
                </a>
                <a
                  href="https://www.instagram.com/attire_idyll/channel/"
                  aria-label="Instagram"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.target}
              onClick={() => setIsOpen(false)}
              className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="mx-auto">
            <button
              id="button"
              className="bg-[#4E2FDA] relative overflow-hidden text-sm font-medium text-white rounded-full mt-4 px-6 py-2 flex items-center group transition-transform duration-200 hover:-translate-y-1 "
            >
              <span className="relative z-20">Get Started</span>
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
                className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150 z-0"
                style={{ transformOrigin: "center" }}
              ></span>
            </button>
          </div>{" "}
          <div className="my-4 px-6 py-3 space-y-4">
            <div>
              <div>
                <p className=" text-lg font-semibold">Contact Info </p>
                <div className="flex mt-2">
                  <FaPhoneAlt className="text-sm" />
                  <p className="ml-2 text-xs f">+880 1625885658</p>
                </div>
                <div className="flex mt-2">
                  <FaEnvelope className="text-sm" />
                  <p className="ml-2 text-xs f">help@gmail.com</p>
                </div>{" "}
              </div>
            </div>

            <div>
              <div>
                <div>
                  <p className=" text-lg font-semibold">Our Location </p>
                  <div className="flex mt-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <p className="ml-2 text-xs f">
                      {" "}
                      8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX
                      773
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">Social Links</p>
              <div className="flex  gap-3 mt-3">
                <a
                  href="https://www.facebook.com/attireidyllbd/"
                  aria-label="Facebook"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://whatsapp.com"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaTwitter className="text-sm" la />
                </a>
                <a
                  href="https://www.instagram.com/attire_idyll/channel/"
                  aria-label="Instagram"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center size-8 md:size-9 rounded-full bg-gray-300 text-blue-800 hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
