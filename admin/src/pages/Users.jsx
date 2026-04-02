import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import withAuth from "../components/withAuth";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/admin/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const result = await res.json();

        if (!result.success) {
          alert(result.error || "Something Went Wrong");
          return;
        }

        setData(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const filteredUsers = data.filter((item) => item.role !== "admin");

  return (
    <Layout>
      <div className="w-full min-h-full  bg-sky-50 rounded-2xl shadow-md p-4 sm:p-6">
        <div className="w-full max-w-6xl mx-auto mb-6">
          <div className="bg-sky-600 text-white text-center py-3 sm:py-4 rounded-xl text-lg sm:text-xl md:text-2xl font-bold italic shadow">
            User & HOD Management
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-lg sm:text-xl font-semibold animate-pulse">
              Loading...
            </h1>
          </div>
        )}

        {!loading && filteredUsers.length > 0 && (
          <div
            className="w-full rounded-xl shadow-lg 
                max-h-[70vh] overflow-y-auto overflow-x-hidden"
          >
            <table className="w-full border-collapse">
              <thead className="bg-sky-600 text-white sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 text-left text-sm md:text-base">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">
                    Role
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {filteredUsers.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-sky-50 transition duration-200"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold 
                ${
                  item.role === "hod"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-green-100 text-green-700"
                }`}
                      >
                        {item.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && filteredUsers.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-gray-500 font-semibold italic text-lg">
              No Users Available
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Users);
