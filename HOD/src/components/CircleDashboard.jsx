import React, { useEffect, useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const Dashboard = ({data}) => {
 
  const colors = ["#FFA500", "#008000", "#FF0000",];
   
  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] border rounded-xl p-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%" // 🔥 responsive radius
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;