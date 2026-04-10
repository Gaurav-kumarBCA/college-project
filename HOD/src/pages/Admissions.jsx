import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { withAuth } from "../components/withAuth";

const Admissions = () => {
  const [admissions, setAdmissions] = useState(null);



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch("http://localhost:7000/HOD/admissions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
       
        setAdmissions(data?.data || []);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-60px)]     ">
        <div className=" rounded mx-auto  max-w-9xl shadow p-6   relative border-2">
          {/* header  */}

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Admissions</h2>
            <p className="text-gray-400 text-sm mt-1 hidden md:block  ">
              A list of all the Users in your account including their Name and
              Email .
            </p>
          </div>

          {/* table  */}

          <div className=" max-h-110   rounded overflow-x-auto overflow-y-scroll  hide-scrollbar border-1  ">
            <table className=" w-full border-collapse  ">
              <thead className="sticky top-0 z-10 bg-blue-400 text-white border-b border-black">
                <tr>
                  <th className="px-4 py-3 border-black border-r  text-sm sm:text-base font-medium">
                    Course Name
                  </th>
                  <th className="px-4 py-3 border-black  border-r text-sm sm:text-base font-medium">
                    Student Name
                  </th>
                  <th className="px-4 py-3 border-black border-r text-sm sm:text-base font-medium">
                    View full
                  </th>
                </tr>
              </thead>

              <tbody>
                {admissions?.length > 0 ? (
                  admissions.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-500 hover:bg-gray-200"
                    >
                      <td className="px-4 border-r border-black py-3 text-sm sm:text-base text-center ">
                        {item.courseAppliedFor}
                      </td>
                      <td className="px-4 border-r border-black py-3 text-sm sm:text-base text-center ">
                        {item.fullName}
                      </td>

                      <td className="px-4 border-r border-black py-3 text-center">
                        <Link
                          to={`/viewfullInfo/${item._id}`}
                          className="inline-block px-3 sm:px-4 py-1.5 sm:py-2  
                            text-xs sm:text-sm font-medium text-white  bg-blue-600 rounded-lg  hover:bg-blue-700  transition-all duration-200  shadow-sm hover:shadow-md" >
                          View Info
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      Users not found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Admissions);

