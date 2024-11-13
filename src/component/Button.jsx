const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-[#4E2FDA] relative overflow-hidden text-xs md:text-sm  font-medium text-white rounded-full pl-4 pr-2 py-2 flex items-center group transition-transform duration-300 hover:-translate-y-1 w-fit">
        <span className="relative z-20">{text}</span>
        <div className="ml-2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full relative z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 md:w-5 md:h-5 transform -rotate-45 group-hover:rotate-0 text-[#4E2FDA] transition-transform duration-300"
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
  );
};

export default Button;
