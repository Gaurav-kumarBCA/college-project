// import React from "react";
// import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";

// const Homecourse = () => {
//   const { data } = useFetch(`public/courses?limit=6`);
//   const display = data?.data || [];

//   return (
//     <div className="bg-amber-50 m-3 rounded-lg p-4">
      
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
//         Courses
//       </h1>

//       <div className="grid gap-4 
//                       grid-cols-1 
//                       sm:grid-cols-2 
//                       md:grid-cols-3 
//                       lg:grid-cols-3">

//         {display.length > 0 &&
//           display.map((d) => (
//             <Link
//               to={"/course"}
//               key={d._id}
//               className="bg-white p-4 rounded-xl shadow 
//                          hover:shadow-lg transition duration-300 
//                          flex flex-col sm:flex-row 
//                          sm:justify-between sm:items-center"
//             >
//               <p className="font-semibold text-lg">
//                 {d.courseName}
//               </p>

//               <p className="text-gray-600 mt-2 sm:mt-0">
//                 {d.duration}
//               </p>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Homecourse;




import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Homecourse = () => {
  const { data, loading } = useFetch(`public/courses?limit=6`);
  const display = data?.data || [];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white m-4 rounded-xl p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        🎓 Our Courses
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center font-semibold">Loading Courses...</p>
      )}

      {/* Courses Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {display.map((d) => (
          <Link
            key={d._id}
            to="/course"
            className="group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-center">

              <div>
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-indigo-600 transition">
                  {d.courseName}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Duration: {d.duration}
                </p>
              </div>

              <ArrowRight
                size={20}
                className="text-indigo-600 group-hover:translate-x-2 transition"
              />

            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          to="/course"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          View All Courses
        </Link>
      </div>

    </section>
  );
};

export default Homecourse;