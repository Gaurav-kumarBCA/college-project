import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import withAuth from "../components/withAuth";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/admin/viewCourse/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        if (!data.success) {
          alert(data.error || "Something Went Wrong");
          return;
        }

        setCourses(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  return (
    <Layout>
      <div className="w-full min-h-full bg-sky-50 rounded-2xl shadow-md p-4">

        <div className="w-full max-w-4xl mx-auto mb-6">
          <div className="bg-sky-500 text-white text-center py-3 rounded-xl text-lg sm:text-xl md:text-2xl font-bold italic shadow">
            Courses Management
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-lg sm:text-xl font-semibold">Loading...</h1>
          </div>
        )}

        {!loading && courses.length > 0 && (
          <div className="w-full overflow-x-auto rounded-xl shadow">

            <table className="min-w-[800px] w-full border-collapse">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm md:text-base">#</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Course</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Duration</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Eligibility</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Description</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Active</th>
                </tr>
              </thead>

              <tbody className="bg-sky-100">
                {courses.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-sky-200 hover:bg-sky-200 transition"
                  >
                    <td className="px-4 py-3 text-sm md:text-base">{index + 1}</td>
                    <td className="px-4 py-3 text-sm md:text-base">{item.courseName}</td>
                    <td className="px-4 py-3 text-sm md:text-base">{item.duration}</td>
                    <td className="px-4 py-3 text-sm md:text-base">{item.eligibility}</td>
                    <td className="px-4 py-3 text-sm md:text-base break-words max-w-xs">
                      {item.description}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                          item.isActive
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {item.isActive ? "Yes" : "No"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

        {!loading && courses.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-gray-600 font-semibold italic text-lg">
              No Courses Found
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Courses);