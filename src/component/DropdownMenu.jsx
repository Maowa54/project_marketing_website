import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ name, target, items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Function to handle scrolling to a section
  const handleScroll = (target) => {
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative px-3 py-2 text-sm hover:bg-[#4E2FDA] hover:text-white transition-colors duration-300 rounded"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Link for Dropdown */}
      <button
        className="flex items-center whitespace-nowrap"
        onClick={() => handleScroll(target)} // Scroll to section on click
      >
        {name}
        <svg
          className="ml-1 w-4 h-4 transform transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-auto min-w-[200px] z-10"
          onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over the dropdown
          onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves the dropdown
        >
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.target} // Navigate to other pages when clicking dropdown item
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-[#4E2FDA] transition-colors duration-300 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
