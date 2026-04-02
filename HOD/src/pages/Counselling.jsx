import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { withAuth } from '../components/WithAuth';

const Counselling = () => {
   const [counselling,setCounsilling] = useState(null);
  //  console.log(counselling,'counsilling data');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/HOD/counselling`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setCounsilling(data?.data || []);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-60px)]">
        <div className=" rounded mx-auto  max-w-9xl shadow p-6   relative border-2">
          {/* header  */}

          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Counsilling</h2>
            <p className="text-gray-400 text-sm mt-1 hidden md:block  ">
              A list of all the counsilling users in your account including
              their Name and email and neccessary information.
            </p>
          </div>

          {/* table  */}
          {/* 
           <div className=" max-h-110 overflow-y-auto rounded   hide-scrollbar border  ">
            <table className=" w-full border-collapse  ">
              <thead className="sticky top-0 z-10 bg-blue-400 text-white border-b border-black">
                <tr>
                  <th className="px-4 py-3 border-black border-r   text-sm sm:text-base font-medium">
                    No
                  </th>
                  <th className="px-4 py-3 border-black border-r  text-sm sm:text-base font-medium">
                    Course
                  </th>
                  <th className="px-4 py-3 border-black border-r text-sm sm:text-base font-medium">
                    Name
                  </th>
                  <th className="px-4 py-3 border-black border-r  text-sm sm:text-base font-medium">
                    Email
                  </th>
                  <th className="px-4 py-3 border-black border-r  text-sm sm:text-base font-medium">
                    Passing_year
                  </th>
                  <th className="px-4 py-3 border-black border-r  text-sm sm:text-base font-medium">
                    Phone
                  </th>
                  <th className="px-4 py-3 border-black   text-sm sm:text-base font-medium">
                    Qualification
                  </th>
                </tr>
              </thead>

              <tbody>
                {counselling?.length > 0 ? (
                  counselling.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-500 hover:bg-gray-200"
                    >
                      <td className="px-4 border-r border-black  py-3 text-sm sm:text-base text-center">
                        {index}
                      </td>
                      <td className="px-4  border-black py-3 text-sm sm:text-base text-center">
                        {item.course}
                      </td>
                      <td className="px-4 border-r border-black py-3 text-sm sm:text-base text-center ">
                        {item.name}
                      </td>
                      <td className="px-4 border-r  border-black py-3 text-sm sm:text-base text-center">
                        {item.email}
                      </td>
                      <td className="px-4 border-r border-black py-3 text-sm sm:text-base text-center">
                        {item.passing_year}
                      </td>
                      <td className="px-4 border-r border-black py-3 text-sm sm:text-base text-center">
                        {item.phone}
                      </td>
                      <td className="px-4  border-black py-3 text-sm sm:text-base text-center">
                        {item.qualification}
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
          </div>  */}

          <div className="w-full overflow-x-auto rounded border hide-scrollbar">
            <table className="min-w-[700px] w-full border-collapse">
              <thead className="sticky top-0 z-10 bg-blue-400 text-white border-b border-black">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base">
                    No
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base">
                    Course
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base">
                    Name
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base">
                    Email
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base">
                    Passing Year
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base">
                    Phone
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
                    Qualification
                  </th>
                </tr>
              </thead>

              <tbody>
                {counselling?.length > 0 ? (
                  counselling.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-500 hover:bg-gray-200"
                    >
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-xs sm:text-sm md:text-base text-center">
                        {index + 1}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-center">
                        {item.course}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-center">
                        {item.name}
                      </td>
                      <td className="px-2 sm:px-4 py-2  sm:py-3 border-r border-black text-center break-words">
                        {item.email}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-center">
                        {item.passing_year}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 border-r border-black text-center">
                        {item.phone}
                      </td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                        {item.qualification}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
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



export default withAuth(Counselling);



