import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky header
  const [showHeader, setShowHeader] = useState(false); // State to control header appearance on scroll

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Check the scroll position and toggle the sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // When scrolled down by 50px or more
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
      className={`lg:px-24  lg:py-3 mx-auto transition-all duration-700 ease-in-out ${
        isSticky ? "w-full bg-white fixed top-0 left-0 z-50 shadow-md" : ""
      } ${showHeader ? "top-0" : "-top-20"}`} // Control the top position for scroll animation
    >
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="/assets/images/expressit-Plus.png"
              alt="ExpressITbd Logo"
              className="h-14 w-44"
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
        <nav className="hidden lg:flex text-gray-700 text-base space-x-4 font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-3 py-2 hover:bg-[#4E2FDA] hover:text-white transition-colors duration-300 rounded"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="bg-[#4E2FDA] hidden relative overflow-hidden text-sm  font-medium text-white rounded-full pl-4 pr-2 py-2 lg:flex items-center group transition-transform duration-300 hover:-translate-y-1">
                  <span className="relative z-20">Free Consultation</span>{" "}
                  {/* Ensuring text is above the background */}
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
                    className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150" // Adjust duration here if needed
                    style={{ transformOrigin: "center" }}
                  ></span>
                </button>
       
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col max-h-screen overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link to="/">
              <img
                src="/assets/images/expressit-Plus.png"
                alt="ExpressITbd Logo"
                className="h-12 w-40"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 bg-[#4E2FDA] rounded-full"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="w-full text-gray-700 hover:bg-[#4E2FDA] hover:text-white px-6 py-3 border-b transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
