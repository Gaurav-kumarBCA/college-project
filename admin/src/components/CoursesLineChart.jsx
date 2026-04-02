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

  if (!Array.isArray(courses) || courses.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No Course Data Available
      </div>
    );
  }

  const chartData = courses.map((course) => ({
    name: course.courseName?.slice(0, 10) || "N/A", // 🔥 long name fix
    duration: parseInt(course.duration) || 0
  }));

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] p-2 sm:p-4">
      
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-gray-700 text-center sm:text-left">
        Course Duration Analytics
      </h2>

      <div className="w-full h-[85%] overflow-x-auto">
        <div className="min-w-[500px] sm:min-w-full h-full">
          
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>

              <defs>
                <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis 
                dataKey="name"
                tick={{ fontSize: 11 }}
                angle={-30}
                textAnchor="end"
                interval={0}
              />

              <YAxis 
                tick={{ fontSize: 11 }}
                width={40}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                }}
              />

              <Area
                type="monotone"
                dataKey="duration"
                stroke="#6366f1"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorDuration)"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

            </AreaChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default CourseLineChart;