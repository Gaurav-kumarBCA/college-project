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
      <div className="w-full h-full lg:min-h-[500px] max-h-[70vh] 
      bg-sky-400 shadow-xl rounded-2xl 
      p-3 sm:p-4 md:p-6 flex flex-col gap-4 ">

        {/* Header */}
        <div className="w-full flex items-center justify-center">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold italic text-center">
            Courses Management
          </h1>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-lg sm:text-xl font-semibold text-white">
              Loading...
            </h1>
          </div>
        )}

        {/* ================= DATA ================= */}
        {!loading && courses.length > 0 && (
          <>
            {/* ✅ Mobile View (Scrollable Cards) */}
            <div className="md:hidden flex flex-col gap-3  overflow-y-auto max-h-[100vh] pr-1">
              {courses.map((item, index) => (
                <div
                  key={item._id}
                  className="bg-sky-300 p-4 rounded-xl shadow-md flex flex-col gap-2"
                >
                  <h2 className="text-sm font-bold">
                    {index + 1}. {item.courseName}
                  </h2>

                  <p className="text-sm">
                    <span className="font-semibold">Duration:</span> {item.duration}
                  </p>

                  <p className="text-sm">
                    <span className="font-semibold">Eligibility:</span> {item.eligibility}
                  </p>

                  <p className="text-sm break-all">
                    <span className="font-semibold">Description:</span> {item.description}
                  </p>

                  <span
                    className={`w-fit text-xs px-3 py-1 rounded-full ${
                      item.isActive
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              ))}
            </div>

            {/* ✅ Desktop Table (Scrollable) */}
            <div className="hidden md:block w-full rounded-xl overflow-hidden">

              {/* Scroll Area */}
              <div className="max-h-[400px] overflow-y-auto">

                <table className="w-full min-w-[700px] border-collapse">

                  {/* Head */}
                  <thead className="bg-sky-600 sticky top-0 z-10">
                    <tr>
                      {["#", "Course", "Duration", "Eligibility", "Description", "Status"].map((head, i) => (
                        <th
                          key={i}
                          className="px-4 py-3 text-left text-white text-sm lg:text-base font-semibold uppercase"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className="bg-sky-300">
                    {courses.map((item, index) => (
                      <tr
                        key={item._id}
                        className="border-b border-sky-200 hover:bg-sky-400 transition"
                      >
                        <td className="px-4 py-2 text-sm">
                          {index + 1}
                        </td>

                        <td className="px-4 py-2 text-sm">
                          {item.courseName}
                        </td>

                        <td className="px-4 py-2 text-sm">
                          {item.duration}
                        </td>

                        <td className="px-4 py-2 text-sm">
                          {item.eligibility}
                        </td>

                        <td className="px-4 py-2 text-sm max-w-[250px] break-words">
                          {item.description}
                        </td>

                        <td className="px-4 py-2">
                          <span
                            className={`text-xs px-3 py-1 rounded-full ${
                              item.isActive
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {item.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>
            </div>
          </>
        )}

        {/* No Data */}
        {!loading && courses.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-white font-semibold italic text-base sm:text-lg">
              No Courses Found
            </h1>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default withAuth(Courses);