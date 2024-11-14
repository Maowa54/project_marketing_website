import { useEffect, useState } from "react";

const CircularProgress = ({ percentage, size = 100, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // Calculate the stroke offset for the progress percentage
    const progressOffset = circumference - (percentage / 100) * circumference;
    setOffset(progressOffset);
  }, [circumference, percentage]);

  return (
    <div
      data-aos="fade-up" // AOS animation when it comes into view
      data-aos-offset="200" // Trigger animation when scrolled 200px into view
      data-aos-duration="1000"
      className="relative flex items-center justify-center mt-6"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }} // Starts from 90 degrees (top)
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#333333"
          fill="transparent"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFFFFF"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 2s ease",
          }}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage Text in the Center */}
      <span className="absolute text-3xl font-bold text-white">{percentage}%</span>
    </div>
  );
};

// Component to render four circular progress bars with specific percentages and labels
const CircularProgressGroup = () => {
  const percentages = [82, 65, 82, 95]; // Random percentages
  const labels = ["SMM", "PPC", "SEO", "Digital Marketing"]; // Labels for each circle

  return (
    <div className="grid justify-around grid-cols-1 md:grid-cols-4 items-center gap-6">
      {percentages.map((percentage, index) => (
        <div key={index} className="flex flex-col items-center">
          <CircularProgress percentage={percentage} size={140} />
          <span className="mt-2 text-white font-semibold">{labels[index]}</span> {/* Centered text under each circle */}
        </div>
      ))}
    </div>
  );
};

export default CircularProgressGroup;
