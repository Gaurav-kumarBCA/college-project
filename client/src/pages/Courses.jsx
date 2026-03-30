


import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Courses = () => {
  return (
    <Layout>
      <div className="relative bg-amber-50 py-8">
        <h1 className="text-4xl md:text-5xl font-bold italic px-6 text-center md:text-left">
          Our Courses
        </h1>
        <p className="px-6 mt-2 text-gray-600 text-center md:text-left">
          Explore our professional and career-oriented programs.
        </p>
      </div>

      <CourseSection />
    </Layout>
  );
};

export default Courses;

// ======================= COURSE SECTION =======================

export const CourseSection = () => {
  const [keyword, setKeyword] = useState("");
  const [course, setCourse] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  // 🔥 Fetch all courses initially
  const { data, loading } = useFetch(`public/courses`);

  console.log(data, "this is data")

  // 🔥 Set initial data
  useEffect(() => {
    if (data?.data) {
      setCourse(data.data);
    }
  }, [data]);

  // 🔥 Search Function
  const searchCourse = async () => {
    try {
      if (!keyword.trim()) {
        setCourse(data?.data || []);
        return;
      }

      setLoadingSearch(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(
        `${url}/public/search?keyword=${keyword}`
      );

      const result = await res.json();

      if (result.success) {
        setCourse(result.data);
      } else {
        setCourse([]);
      }

      setLoadingSearch(false);
    } catch (error) {
      console.log(error);
      setLoadingSearch(false);
    }
  };

  // 🔥 Loading state (initial load)
  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="px-6 py-12 bg-gray-50">
      
      {/* 🔍 SEARCH BAR */}
      <div className="flex justify-center my-5">
        <div className="flex w-full max-w-md">
          
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchCourse();
              }
            }}
            placeholder="Search courses..."
            className="w-full px-4 py-2 rounded-l-xl border border-gray-300 
                       focus:outline-none shadow-sm"
          />

          <button
            onClick={searchCourse}
            className="bg-blue-500 text-white px-4 flex items-center justify-center 
                       rounded-r-xl hover:bg-blue-600 transition cursor-pointer"
          >
            <Search size={18} />
          </button>

        </div>
      </div>

      {/* 🔄 SEARCH LOADING */}
      {loadingSearch && (
        <p className="text-center text-blue-500">Searching...</p>
      )}

      {/* 📦 COURSES GRID */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        
        {course.length > 0 ? (
          course.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-700 transition">
                  {item.courseName}
                </h2>

                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">Duration: </span>
                    {item.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Eligibility: </span>
                    {item.eligibility}
                  </p>
                </div>

                <Link
                  to={`/coursedetail/${item._id}`}
                  className="mt-6 block text-center bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500 text-lg">
            No courses found 
          </p>
        )}

      </div>
    </div>
  );
};