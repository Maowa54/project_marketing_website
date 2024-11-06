import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  const menuItems = [
    { name: "Home", path: "/", dropdownItems: ["Submenu 1", "Submenu 2"] },
    { name: "About", path: "/about", dropdownItems: ["Our Team", "Our Story"] },
    { name: "Services", path: "/services", dropdownItems: ["Consulting", "Support"] },
    { name: "Pages", path: "/pages", dropdownItems: ["Page 1", "Page 2"] },
    { name: "Blog", path: "/blog", dropdownItems: ["Latest Posts", "Popular"] },
    { name: "Contact Us", path: "/contact", dropdownItems: ["Email Us", "Find Us"] },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };


  const [activeDropdown, setActiveDropdown] = useState(null);
  let hideTimeout;

  const handleMouseEnter = (index) => {
    clearTimeout(hideTimeout);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Adjust delay as needed
  };

  return (
    <header className="lg:container lg:py-3 mx-auto mb-5">
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

        <nav className="hidden lg:flex text-gray-700 text-lg space-x-4 font-medium">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to={item.path}
            className="flex items-center px-3 py-2 hover:text-[#4E2FDA] cursor-pointer"
          >
            {item.name}
            <FaChevronDown className="ml-1 text-sm" />
          </Link>
          
          {/* Dropdown menu */}
          {activeDropdown === index && (
            <div
              className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-lg p-2"
              onMouseEnter={() => clearTimeout(hideTimeout)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdownItems.map((dropdownItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={`${item.path}/${dropdownItem.toLowerCase().replace(" ", "-")}`}
                  className="block px-3 py-2 hover:text-[#4E2FDA] transform transition-transform duration-200 hover:translate-x-1 cursor-pointer"
                >
                  {dropdownItem}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>


        {/* Get Started Button - Hidden on Small and medium Screens */}
        <button className="hidden lg:flex bg-[#4E2FDA] relative overflow-hidden text-lg font-medium text-white rounded-full px-4 py-2 items-center group transition-transform duration-300 hover:-translate-y-1">
          <span className="relative z-20">Get Started</span>
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
            className="absolute inset-0 bg-[#2F02FE] rounded-full transition-transform duration-300 scale-0 group-hover:scale-150"
            style={{ transformOrigin: "center" }}
          ></span>
        </button>
      </div>

    {isOpen && (
  <div className="fixed inset-0 bg-white z-50 flex flex-col max-h-screen overflow-y-auto">
    {/* Header with Logo and Close Button */}
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

    {/* Menu Items */}
    {menuItems.map((item, index) => (
      <div key={index} className="w-full space-y-6 px-6 py-2">
        <div className="flex items-center justify-between border-b pb-2">
          <Link to={item.path} onClick={() => setIsOpen(false)} className="hover:text-gray-500">
            {item.name}
          </Link>
          <button
            onClick={() => toggleItem(index)}
            className="border border-gray-500 p-1 rounded text-gray-700"
          >
            {openItem === index ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        {openItem === index && (
          <div className="pl-6 mt-2 space-y-2">
            {item.dropdownItems.map((dropdownItem, subIndex) => (
              <Link
                key={subIndex}
                // to={`${item.path}/${dropdownItem.toLowerCase().replace(" ", "-")}`}
                className="block text-gray-700 hover:text-[#4E2FDA]"
                onClick={() => setIsOpen(false)}
              >
                {dropdownItem}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)}

    </header>
  );
};

export default Header;
