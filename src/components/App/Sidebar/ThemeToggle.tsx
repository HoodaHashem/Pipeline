import { useState } from "react";

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-block w-8 h-8 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
        aria-label="Toggle between light and dark theme"
      />
      <svg
        className={`absolute inset-0 w-full h-full text-gray-400 transition-transform duration-300 ease-in-out ${
          isChecked ? "rotate-90 text-third" : "rotate-45 text-second"
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="20" height="20" fill="white" />
          <circle
            cx="11"
            cy="3"
            r="7"
            fill="black"
            className={`transition-transform duration-500 ease-in-out ${
              isChecked
                ? "translate-x-4 -translate-y-1"
                : "translate-x-0 translate-y-0"
            }`}
          />
        </mask>
        <circle
          cx="10"
          cy="10"
          r="5"
          mask="url(#moon-mask)"
          className={`transition-transform duration-300${
            isChecked ? "scale-55" : "scale-100"
          }`}
        />
        <g>
          {[
            { cx: 18, cy: 10 },
            { cx: 14, cy: 16.928 },
            { cx: 6, cy: 16.928 },
            { cx: 2, cy: 10 },
            { cx: 6, cy: 3.1718 },
            { cx: 14, cy: 3.1718 },
          ].map((circle, index) => (
            <circle
              key={index}
              cx={circle.cx}
              cy={circle.cy}
              r="1"
              className={`transform origin-center transition-transform duration-300 ${
                isChecked ? "scale-100" : "scale-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            />
          ))}
        </g>
      </svg>
    </label>
  );
};

export default ThemeToggle;
