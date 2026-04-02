// import React from "react";
// import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,PieChart,Pie,Legend} from "recharts";
// import Counselling from "../pages/Counselling";
// import Admissions from "../pages/Admissions";



// export default function SimpleLineChart({data}) {
//   console.log(data,'hi data graph dashboard');
//   return (
//     <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] border rounded-xl p-2">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />

//           <XAxis dataKey="name" />
//           <YAxis />

//           <Tooltip />
//           <Legend />

//           <Line
//             type="monotone"
//             dataKey="Admissions"
//             stroke="#8884d8"
//             strokeWidth={2}
//           />

//           <Line
//             type="monotone"
//             dataKey="Counsilling"
//             stroke="#82ca9d"
//             strokeWidth={2}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }



import { DatabaseBackup } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function SimpleLineChart() {
  const chartData = [
    { name: "Users", addmission: 400, Counselling: 240 },
    { name: "Admissions", admissions: 300, Counselling: 456 },
    { name: "Counsilling", admissions: 200, Counselling: 139 },
    { name: "Courses", admissions: 278, Counselling: 390 },
  ];
  // console.log(data, "hi data graph dashboard");

  // Safety check
  // if (!data || data.length === 0) {

  //   return <p className="text-center mt-10">Loading chart...</p>;
  // }

  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] border rounded-xl p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="admissions"
            stroke="#8884d8"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="counselling"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
