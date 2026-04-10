import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ArrowBigRight } from "lucide-react";
import { data, Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import CircleDashboard from "../components/CircleDashboard";
import GraphDashboard from "../components/GraphDashboard";
import { withAuth } from "../components/withAuth";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [counselling, setCounsilling] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [allData, setAllData] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(`${url}/HOD/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setUsers(data?.data || []);

      const res2 = await fetch(`${url}/HOD/getcourse`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await res2.json();
      setCourses(result?.data || []);

      const res3 = await fetch(`${url}/HOD/counselling`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const resp = await res3.json();
      setCounsilling(resp.data);

      const res4 = await fetch(`${url}/HOD/admissions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const admissionData = await res4.json();
      setAdmissions(admissionData.data);
      if (data && result && resp && admissionData) {
        setAllData([
          { name: "Users", value: data.data.length },
          { name: "Courses", value: result.data.length },
          { name: "Admissions", value: admissionData.data.length },
          { name: "Counsilling", value: resp.data.length },
        ]);
      } else {
        console.log("Data not found in home");
      }
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-60px)] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col py-6">
          {/* Cards Section */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="relative border flex justify-between items-center gap-2 py-5 px-6 bg-blue-500 rounded-xl shadow">
              <div className="text-white flex  items-center  justify-center gap-5">
                <h1 className="mb-2 text-xl sm:text-2xl">Users</h1>
                <h1 className="">{users.length}</h1>
              </div>
              <img
                className="h-9 w-9 sm:h-15 sm:w-14 "
                src="/abhiuser.png"
                alt=""
              />

              <div className="absolute bottom-0 left-0 w-full">
                <Link
                  className="flex justify-center items-center gap-2 text-white bg-blue-600 py-1 rounded-b-xl"
                  to="/users"
                >
                  More info <FaArrowCircleRight />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative border flex justify-between items-center gap-2 py-5 px-6 bg-[#28A745] rounded-xl shadow">
              <div className="text-white flex  items-center justify-center gap-5">
                <h1 className="mb-2 text-xl sm:text-2xl">Courses</h1>
                <h1 className="">{courses.length}</h1>
              </div>
              <img
                className="h-9 w-9 sm:h-16 sm:w-16"
                src="/coursesimage.png"
                alt=""
              />

              <div className="absolute bottom-0 left-0 w-full">
                <Link
                  className="flex justify-center items-center gap-2 text-white bg-[#1E7E34] py-1 rounded-b-xl"
                  to="/course"
                >
                  More info <FaArrowCircleRight />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative border flex justify-between items-center gap-2 py-5 px-6 bg-[#D39E00] rounded-xl shadow">
              <div className="text-white flex justify-center items-center gap-5">
                <h1 className="mb-2 text-xl sm:text-2xl">Counsilling</h1>
                <p className=" text-sm sm:text-base">{counselling.length}</p>
              </div>
              <img
                className="h-12 w-12 sm:h-16 sm:w-16"
                src="/building.png"
                alt=""
              />

              <div className="absolute bottom-0 left-0 w-full">
                <Link
                  className="flex justify-center items-center gap-2 text-white bg-[#FFC107] py-1 rounded-b-xl"
                  to="/admissions"
                >
                  More info <FaArrowCircleRight />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative border flex justify-between items-center gap-2 py-5 px-6 bg-[#DC3545] rounded-xl shadow">
              <div className="text-white flex justify-center items-center gap-5">
                <h1 className="mb-2 text-xl sm:text-2xl">Admissions</h1>
                <p className=" text-sm sm:text-base">{admissions.length}</p>
              </div>
              <img
                className="h-12 w-12 sm:h-16 sm:w-16"
                src="/admissions.png"
                alt=""
              />

              <div className="absolute bottom-0 left-0 w-full">
                <Link
                  className="flex justify-center items-center gap-2 text-white bg-[#BD2130] py-1 rounded-b-xl"
                  to="/admissions"
                >
                  More info <FaArrowCircleRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Graph Section */}
          <div className="flex flex-col lg:flex-row gap-6 mt-10">
            <div className="flex-1">
              <GraphDashboard  />
            </div>
            <div className="flex-1">
              <CircleDashboard data={allData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Home);


