// import React from "react";
// import Layout from "../components/Layout";
// import useFetch from "../hooks/useFetch";
// import { Link, useParams } from "react-router-dom";
// import { MoveLeft } from "lucide-react";

// const CourseAbout = () => {
//   const { id } = useParams();
//   // console.log(id, "this is id")
//   const { data, loading } = useFetch(`public/coursedetail/${id}`);

//   const course = data?.data;
//   console.log(course)

//   if (loading) {
//     return (
//       <Layout>
//         <div className="flex justify-center items-center h-[60vh] text-xl font-semibold">
//           Loading Course Details...
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
        
//         {/* Back Button */}
//         <Link
//           to="/course"
//           className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition mb-6"
//         >
//           <MoveLeft size={20} />
//           Back to Courses
//         </Link>

//         {/* Main Card */}
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-8 p-6 md:p-10">
          
//           {/* Left Side Image */}
//           <div className="relative group">
//             <div className="overflow-hidden rounded-2xl">
//               <img
//               src={`${course?.Image}`}
//               alt="course"
//               className="rounded-2xl w-full h-full object-cover transition duration-500 group-hover:scale-105"
//             />
//             </div>
            
//           </div>

//           {/* Right Side Content */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-4xl font-bold text-indigo-700 mb-4">
//               {course?.courseName}
//             </h1>

//             <p className="text-gray-600 mb-6 leading-relaxed">
//               {course?.description}
//             </p>

//             <div className="space-y-3 text-gray-700">
//               <p>
//                 <span className="font-semibold text-black">Duration:</span>{" "}
//                 {course?.duration}
//               </p>
//               <p>
//                 <span className="font-semibold text-black">Eligibility:</span>{" "}
//                 {course?.eligibility}
//               </p>
//               <p className="">
//                 <span className="font-semibold text-black">Fees:</span>{" "}
//               ₹ {course?.fees}/year
//             </p>
//             </div>

//             <div className="flex gap-4 mt-8">
//               <Link to={"/counselling"} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl font-semibold transition shadow-md hover:scale-105">
//                 Counselling
//               </Link>

//               <Link to={"/admission"} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition shadow-md hover:scale-105">
//                 Apply for Admission
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CourseAbout;




import React from "react";
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const CourseAbout = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`public/coursedetail/${id}`);

  const course = data?.data;

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-[60vh] text-xl font-semibold">
          Loading Course Details...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4 sm:px-6 md:px-12">

        {/* Back Button */}
        <Link
          to="/course"
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition mb-4 sm:mb-6"
        >
          <MoveLeft size={20} />
          Back to Courses
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-10">

          {/* Image Section */}
          {/* <div className="relative group w-full">
            <div className="overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
              <img
                src={course?.Image}
                alt="course"
                className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
          </div> */}

          <div className="relative group w-full">
  
  <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-2xl bg-gray-200">
    
    <img
      src={course?.Image}
      alt="course"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
    />
    
  </div>

</div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-700 mb-3 sm:mb-4">
              {course?.courseName}
            </h1>

            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              {course?.description}
            </p>

            <div className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
              <p>
                <span className="font-semibold text-black">Duration:</span>{" "}
                {course?.duration}
              </p>
              <p>
                <span className="font-semibold text-black">Eligibility:</span>{" "}
                {course?.eligibility}
              </p>
              <p>
                <span className="font-semibold text-black">Fees:</span>{" "}
                ₹ {course?.fees}/year
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">

              <Link
                to={"/counselling"}
                className="text-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl font-semibold transition shadow-md hover:scale-105"
              >
                Counselling
              </Link>

              <Link
                to={"/admission"}
                className="text-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition shadow-md hover:scale-105"
              >
                Apply for Admission
              </Link>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseAbout;