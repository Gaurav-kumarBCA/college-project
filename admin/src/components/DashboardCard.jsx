import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({
  icon: Icon,
  title,
  value,
  link,
}) => {

  console.log(title, "this is title");
  return (
    <div className="w-full bg-white border border-gray-200 shadow-md rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition duration-300">

      <div className="flex items-center justify-between">

        <div className="p-3 bg-blue-100 rounded-xl">
          <Icon className="text-blue-600 text-xl sm:text-2xl md:text-3xl" />
        </div>

        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-600 text-right">
          {title}
        </h2>

      </div>

      <div className="mt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          {value || 0}
        </h1>

      </div>

      <div className="mt-4">
        <Link to={link}>
          <button className="text-xs sm:text-sm text-blue-600 font-medium hover:underline">
            See more →
          </button>
        </Link>
      </div>

    </div>
  );
};

export default DashboardCard;