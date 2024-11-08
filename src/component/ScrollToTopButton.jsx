import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Circle properties
  const circleRadius = 24; // Radius of the circle
  const circumference = 2 * Math.PI * circleRadius; // Total circumference

  return (
    scrollProgress > 0 && (
      <div
        className="fixed bottom-8 right-8 w-16 h-16 flex items-center justify-center text-black z-50 cursor-pointer transition-opacity duration-300"
        onClick={scrollToTop}
      >
        <svg width="60" height="60" className="absolute ">
          {/* Gray background circle */}
          <circle
            cx="30"
            cy="30"
            r={circleRadius}
            stroke="#d3d3d3" // Light gray color
            strokeWidth="2"
            fill="none"
          />
          {/* Black progress circle */}
          <circle
            cx="30"
            cy="30"
            r={circleRadius}
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (scrollProgress / 100) * circumference}
            style={{
              transition: 'stroke-dashoffset 0.3s ease',
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
            }}
          />
        </svg>
        {/* Arrow Up Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-black relative z-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7 7 7M12 21V3" />
        </svg>
      </div>
    )
  );
};

export default ScrollToTopButton;
