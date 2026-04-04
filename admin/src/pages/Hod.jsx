import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import NewHOD from '../dialogs/NewHOD';
import DeleteHod from "../dialogs/DeleteHod";
import withAuth from '../components/withAuth';

const Hod = () => {
  const [loading, setLoading] = useState(false);
  const [hodData, setHodData] = useState([]);

  const addHod = (newHod) => {
    setHodData([...hodData, newHod]);
  };

  const delHod = (id) => {
    setHodData(hodData.filter((items) => items._id !== id));
  };

  useEffect(() => {
    const fetchHodData = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/admin/hod`, {
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

        setHodData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHodData();
  }, []);

  return (
    <Layout>
      <div className="w-full h-full lg:min-h-[500px] max-h-[70vh] 
      bg-sky-400 shadow-xl rounded-2xl 
      p-3 sm:p-4 md:p-6 flex flex-col gap-4 overflow-hidden">

        {/* Header */}
        <div className='w-full  flex items-center justify-between flex-wrap gap-2  relative'>
          <h1 className='text-lg  sm:text-xl md:text-2xl lg:text-3xl text-white font-bold italic'>
            HOD Management
          </h1>

          <NewHOD add={addHod} />
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
        {!loading && hodData.length > 0 && (
          <>
            {/* ✅ Mobile View (Scrollable Cards) */}
            <div className='md:hidden flex flex-col gap-3 overflow-y-auto max-h-[100vh] pr-1'>
              {hodData.map((item, index) => (
                <div
                  key={item._id}
                  className='bg-sky-300 p-4 rounded-xl shadow-md flex flex-col gap-2'
                >
                  <h2 className='text-sm font-bold'>
                    {index + 1}. {item.hodName}
                  </h2>

                  <p className='text-sm break-all'>
                    <span className='font-semibold'>Email:</span> {item.email}
                  </p>

                  <p className='text-sm'>
                    <span className='font-semibold'>Phone:</span> {item.phone}
                  </p>

                  <p className='text-sm'>
                    <span className='font-semibold'>Department:</span> {item.department}
                  </p>

                  <div className='pt-2'>
                    <DeleteHod id={item._id} name={item.hodName} delHod={delHod} />
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Desktop Table (Scrollable) */}
            <div className='hidden md:block w-full rounded-xl overflow-hidden'>

              {/* Scroll Area */}
              <div className='max-h-[400px] overflow-y-auto'>

                <table className='w-full min-w-[700px] border-collapse'>

                  {/* Head */}
                  <thead className='bg-sky-600 sticky top-0 z-10'>
                    <tr>
                      {["#", "HOD Name", "Email", "Phone", "Department", "Action"].map((head, i) => (
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
                    {hodData.map((item, index) => (
                      <tr
                        key={item._id}
                        className='border-b border-sky-200 hover:bg-sky-400 transition'
                      >
                        <td className='px-4 py-2 text-sm'>{index + 1}</td>

                        <td className='px-4 py-2 text-sm'>{item.hodName}</td>

                        <td className='px-4 py-2 text-sm break-all'>
                          {item.email}
                        </td>

                        <td className='px-4 py-2 text-sm'>
                          {item.phone}
                        </td>

                        <td className='px-4 py-2 text-sm'>
                          {item.department}
                        </td>

                        <td className='px-4 py-2'>
                          <DeleteHod id={item._id} name={item.hodName} delHod={delHod} />
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
        {!loading && hodData.length === 0 && (
          <div className='flex justify-center items-center h-40'>
            <h1 className='text-white font-semibold italic text-base sm:text-lg'>
              HOD data not found
            </h1>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default withAuth(Hod);