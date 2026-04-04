import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import withAuth from '../components/withAuth';

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

        const resData = await res.json();

        if (!resData.success) {
          alert(resData.error || "Something Went Wrong");
          return;
        }

        setData(resData.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const filteredData = data.filter(item => item.role !== "admin");

  return (
    <Layout>
      <div className="w-full h-full lg:min-h-[500px] max-h-[70vh] 
      bg-sky-400 shadow-xl rounded-2xl 
      p-3 sm:p-4 md:p-6 flex flex-col gap-4 overflow-hidden">

        {/* Header */}
        <div className='w-full flex items-center justify-center'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold italic text-center'>
            Users Management
          </h1>
        </div>

        {/* Loading */}
        {loading && (
          <div className='flex justify-center items-center h-40'>
            <h1 className='text-lg sm:text-xl font-semibold text-white'>
              Loading...
            </h1>
          </div>
        )}

        {/* ================= DATA ================= */}
        {!loading && filteredData.length > 0 && (
          <>
            {/* ✅ Mobile View (Scrollable Cards) */}
            <div className='md:hidden flex flex-col gap-3 overflow-y-auto max-h-[100vh] pr-1'>
              {filteredData.map((item, index) => (
                <div
                  key={item._id}
                  className='bg-sky-300 p-4 rounded-xl shadow-md flex flex-col gap-2'
                >
                  <h2 className='text-sm font-bold'>
                    {index + 1}. {item.name}
                  </h2>

                  <p className='text-sm break-all'>
                    <span className='font-semibold'>Email:</span> {item.email}
                  </p>

                  <p className='text-sm'>
                    <span className='font-semibold'>Role:</span> {item.role}
                  </p>
                </div>
              ))}
            </div>

            {/* ✅ Desktop Table (Scrollable) */}
            <div className='hidden md:block w-full rounded-xl overflow-hidden'>
              
              {/* Scroll Area */}
              <div className='max-h-[400px] overflow-y-auto'>

                <table className='w-full min-w-[600px] border-collapse'>

                  {/* Head */}
                  <thead className='bg-sky-600 sticky top-0 z-10'>
                    <tr>
                      {["#", "Name", "Email", "Role"].map((head, i) => (
                        <th
                          key={i}
                          className='px-4 py-3 text-left text-white text-sm lg:text-base font-semibold uppercase'
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody className='bg-sky-300'>
                    {filteredData.map((item, index) => (
                      <tr
                        key={item._id}
                        className='border-b border-sky-200 hover:bg-sky-400 transition'
                      >
                        <td className='px-4 py-2 text-sm'>
                          {index + 1}
                        </td>

                        <td className='px-4 py-2 text-sm'>
                          {item.name}
                        </td>

                        <td className='px-4 py-2 text-sm break-all'>
                          {item.email}
                        </td>

                        <td className='px-4 py-2 text-sm'>
                          {item.role}
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
        {!loading && filteredData.length === 0 && (
          <div className='flex justify-center items-center h-40'>
            <h1 className='text-white font-semibold italic text-base sm:text-lg'>
              Users data not found
            </h1>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default withAuth(Users);