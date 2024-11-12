const TickMark = () => {
  return (
    <div>
      <span className="w-4 h-4 bg-[#4E2FDA] rounded-full flex items-center justify-center mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
    </div>
  );
};

export default TickMark;
