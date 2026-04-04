import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({
  icon: Icon,
  title,
  value,
  link,
  iconSize = "w-6 h-6 md:w-10 md:h-10",
  color = "#e0f2fe"
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full min-h-[110px] 
      border border-gray-200 shadow-md rounded-2xl 
      flex flex-col justify-between 
      p-3 sm:p-4 md:p-5 
      transition duration-200 hover:scale-[1.03] hover:shadow-xl"
    >

      {/* Top Section */}
      <div className="flex items-center justify-between gap-2">

        {/* Icon */}
        <div className="flex items-center justify-center shrink-0">
          <Icon className={`${iconSize} text-blue-600`} />
        </div>

        {/* Title */}
        <h1 className="text-xs sm:text-sm md:text-base font-semibold italic text-gray-700 text-right leading-tight">
          {title}
        </h1>

      </div>

      {/* Value */}
      <div className="mt-2">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 break-words">
          {value}
        </h2>
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-2">
        <Link to={link}>
          <button className="text-[10px] sm:text-xs md:text-sm text-blue-700 font-semibold hover:underline">
            See more →
          </button>
        </Link>
      </div>

    </div>
  );
};

export default DashboardCard;