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
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const menuItems = [
    { name: "About", target: "#about" },
    { name: "Services", target: "#services" }, // Services with dropdown
    { name: "Works", target: "#works" },
    { name: "Packages", target: "#packages" }, // Packages with dropdown
    { name: "Testimonials", target: "#testimonials" },
    { name: "Blogs", target: "#blogs" },
    { name: "Contact", target: "#contact" },
  ];

  const servicesItems = [
    { name: "Best Services", target: "/allservices" },

    { name: "Search Engine Optimization", target: "/service1" },
    { name: "Pay Per Click Service", target: "/service2" },
    { name: "Email Marketing", target: "/service3" },
    { name: "Social Media Marketing", target: "/service4" },
  ];

  const packagesItems = [
    { name: "Pricing Plan", target: "/pricing" },
    // Add more package items as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setShowHeader(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setShowHeader(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`lg:px-24 py-2 md:py-3 mx-auto transition-all duration-700 ease-in-out ${
        isSticky ? "w-full bg-white fixed top-0 left-0 z-50 shadow-md" : ""
      } ${showHeader ? "top-0" : "-top-20"}`}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <a href="/">
          <img
            src="/assets/images/expressit-Plus.png"
            alt="ExpressITbd Logo"
            className="h-8 md:h-14 md:w-44"
          />
        </a>

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
        <nav className="hidden lg:flex text-gray-700 text-base space-x-2 text-nowrap font-medium">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <DropdownMenu
                key={item.name}
                name="Services"
                target={item.target}
                items={servicesItems}
              />
            ) : item.name === "Packages" ? (
              <DropdownMenu
                key={item.name}
                name="Packages"
                target={item.target}
                items={packagesItems}
              />
            ) : (
              <a
                key={item.name}
                href={item.target}
                className="px-3 py-2 text-sm hover:bg-[#4E2FDA] hover:text-white transition-colors duration-300 rounded"
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        <button className="bg-[#4E2FDA] hidden relative overflow-hidden text-sm font-medium text-white rounded-full pl-4 pr-2 py-2 lg:flex items-center group transition-transform duration-300 hover:-translate-y-1">
          <span className="relative z-20">Free Consultation</span>
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
          <span className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150"></span>
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
          {menuItems.map((item, index) =>
            item.name === "Services" ? (
              <div key={index}>
                <div
                  onClick={() => setIsPackagesOpen(!isPackagesOpen)} // You can change this to a new state for services if needed
                  className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b cursor-pointer flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <span>{isPackagesOpen ? "-" : "+"}</span>
                </div>
                {isPackagesOpen && (
                  <div className="pl-4 mt-2">
                    {servicesItems.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.target}
                        className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 transition-colors duration-300"
                        onClick={() => setIsOpen(false)} // Close the menu when a service is selected
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.name === "Packages" ? (
              <div key={index}>
                <div
                  onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                  className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b cursor-pointer flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <span>{isPackagesOpen ? "-" : "+"}</span>
                </div>
                {isPackagesOpen && (
                  <div className="pl-4 mt-2">
                    <Link
                      to="/pricing"
                      className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 transition-colors duration-300"
                      onClick={() => setIsOpen(false)} // Close the menu when the pricing plan is selected
                    >
                      Pricing Plan
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.target}
                className="w-full text-gray-700 text-sm hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close the menu when any other item is selected
              >
                {item.name}
              </Link>
            )
          )}

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
    </header>
  );
};

export default Header;
