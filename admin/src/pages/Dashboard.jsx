import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import { FaBook, FaBuilding, FaGraduationCap, FaUserTie } from "react-icons/fa";
import DashboardPieChart from "../components/DashboardPieChart";
import CoursesLineChart from "../components/CoursesLineChart";
import withAuth from "../components/withAuth";

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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        console.log(data,"this is data dashboard");

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
      <div className="w-full min-h-full bg-transparent p-4 space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            icon={FaGraduationCap}
            title="Total Users"
            value={dashboard?.totalUsers || 0}
            link="/users"
          />

          <DashboardCard
            icon={FaBook}
            title="Total Courses"
            value={dashboard?.totalCourses || 0}
            link="/courses"
          />

          <DashboardCard
            icon={FaUserTie}
            title="Total HOD"
            value={dashboard?.totalHods || 0}
            link="/hods"
          />

          {/* <DashboardCard
            icon={FaBuilding}
            title="Total Departments"
            value={dashboard?.totalDepartments || 0}
            link="/departments"
          /> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full min-h-[300px] border border-gray-700/40 shadow-xl rounded-2xl p-4">
            <DashboardPieChart dashboard={dashboard} />
          </div>

          <div className="w-full min-h-[300px] border border-gray-700/40 shadow-xl rounded-2xl p-4 overflow-x-auto">
            <CoursesLineChart courses={dashboard?.courses || []} />
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default withAuth(Dashboard);