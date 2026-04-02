import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';
import { FaBook, FaBuilding, FaGraduationCap, FaUserTie } from "react-icons/fa";
import DashboardPieChart from '../components/DashboardPieChart';
import CoursesLineChart from '../components/CoursesLineChart';
import withAuth from '../components/withAuth';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDashboard = async () => {
      try {
        setLoading(true);

        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/admin/dashboard`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        const data = await res.json();

        if (!data.success) {
          alert(data.error || "Something Went Wrong");
          return;
        }

        setDashboard(data.data);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getDashboard();
  }, []);

  return (
    <Layout>
      <div className="w-full h-full lg:min-h-[500px] max-h-[70vh] 
      bg-sky-400 shadow-xl rounded-2xl 
      p-3 sm:p-4 md:p-6 flex flex-col gap-4 
      overflow-x-hidden overflow-y-auto">

        {/* ================= HEADER ================= */}
        <h1 className="text-white text-lg sm:text-xl  md:text-2xl font-bold text-center">
          Dashboard Overview
        </h1>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className='flex justify-center items-center h-40'>
            <h1 className='text-white text-lg'>Loading...</h1>
          </div>
        )}

        {/* ================= CONTENT ================= */}
        {!loading && (
          <>
            {/* ================= CARDS ================= */}
            <div className='grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 gap-3 '>

              <DashboardCard
                icon={FaGraduationCap}
                title="Total Users"
                value={dashboard.totalUsers || 0}
                link="/users"
                color='bg-[#FFF7AE]'
              />

              <DashboardCard
                icon={FaBook}
                title="Total Courses"
                value={dashboard.totalCourses || 0}
                link="/courses"
                color='bg-[#B6F0F3]'
              />

              <DashboardCard
                icon={FaUserTie}
                title="Total HOD"
                value={dashboard.totalHods || 0}
                link="/hods"
                color='bg-[#FFD6F6]'
              />

              

            </div>

            {/* ================= CHARTS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* PIE CHART */}
              <div className="w-full min-w-0 h-[300px] sm:h-[350px] md:h-[400px] 
              bg-white/30 backdrop-blur rounded-2xl shadow-lg p-3">
                <DashboardPieChart dashboard={dashboard} />
              </div>

              {/* LINE CHART */}
              <div className="w-full min-w-0 h-[300px] sm:h-[350px] md:h-[400px] 
              bg-white/30 backdrop-blur rounded-2xl shadow-lg p-3">
                <CoursesLineChart courses={dashboard.courses || []} />
              </div>

            </div>
          </>
        )}

      </div>
    </Layout>
  );
};

export default withAuth(Dashboard);