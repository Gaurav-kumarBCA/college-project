import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const DashboardPieChart = ({ dashboard }) => {
  if (!dashboard) return null;

  const data = [
    { name: "Users", value: dashboard.totalUsers || 0 },
    { name: "Courses", value: dashboard.totalCourses || 0 },
    { name: "HOD", value: dashboard.totalHods || 0 },
    { name: "Departments", value: dashboard.totalDepartments || 0 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="w-full min-w-0 h-full flex flex-col 
    bg-white/40 backdrop-blur rounded-2xl shadow-lg p-3 sm:p-4">

      {/* Title */}
      <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-center text-gray-700 mb-2">
        System Distribution
      </h2>

      {/* Chart */}
      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="35%"   // better donut look
              outerRadius="75%"
              paddingAngle={2}
              labelLine={false}
              label={({ percent }) =>
                percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : ""
              }
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                fontSize: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
              formatter={(value, name) => [`${value}`, name]}
            />

            {/* Legend */}
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "10px"
              }}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default DashboardPieChart;