import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

const CourseLineChart = ({ courses }) => {
  if (!Array.isArray(courses) || courses.length === 0) return null;

  const chartData = courses.map((course) => ({
    name: course.courseName?.slice(0, 10) || "N/A", // 🔥 long name fix
    duration: parseInt(course.duration) || 0
  }));

  return (
    <div className="w-full min-w-0 h-full flex flex-col 
    bg-white/40 backdrop-blur rounded-2xl shadow-lg p-3 sm:p-4">

      {/* Title */}
      <h2 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 text-gray-700">
        Course Duration Analytics
      </h2>

      {/* Chart */}
      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
          >

            {/* Gradient */}
            <defs>
              <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10 }}
              interval="preserveStartEnd"
              angle={-20}
              textAnchor="end"
              height={50}
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fontSize: 10 }}
              width={30}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                fontSize: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="duration"
              stroke="#6366f1"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorDuration)"
              dot={{ r: 2 }}
              activeDot={{ r: 5 }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseLineChart;