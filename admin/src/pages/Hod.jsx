import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import NewHOD from "../dialogs/NewHOD";
import DeleteHod from "../dialogs/DeleteHod";
import withAuth from "../components/withAuth";

const Hod = () => {
  const [loading, setLoading] = useState(false);
  const [hodData, setHodData] = useState([]);

  const addHod = (newHod) => {
    setHodData((prev) => [...prev, newHod]);
  };

  const delHod = (id) => {
    setHodData((prev) => prev.filter((item) => item._id !== id));
  };

  useEffect(() => {
    const hodFunction = async () => {
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
        setHodData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    hodFunction();
  }, []);

  return (
    <Layout>
      <div className="w-full min-h-full bg-sky-50 rounded-2xl shadow-md p-4">

        <div className="w-full max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="bg-sky-500 text-white px-6 py-3 rounded-xl text-lg sm:text-xl md:text-2xl font-bold italic shadow w-full sm:w-auto text-center">
            HOD Management
          </div>

          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <NewHOD add={addHod} />
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-lg sm:text-xl font-semibold">Loading...</h1>
          </div>
        )}

        {!loading && hodData.length > 0 && (
          <div className="w-full overflow-x-auto rounded-xl shadow">

            <table className="min-w-[900px] w-full border-collapse">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm md:text-base">#</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">HOD Name</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Email</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Phone</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Department</th>
                  <th className="px-4 py-3 text-left text-sm md:text-base">Action</th>
                </tr>
              </thead>

              <tbody className="bg-sky-100">
                {hodData.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-sky-200 hover:bg-sky-200 transition"
                  >
                    <td className="px-4 py-3 text-sm md:text-base">{index + 1}</td>
                    <td className="px-4 py-3 text-sm md:text-base break-words">
                      {item.hodName}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base break-words">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base break-words">
                      {item.phone}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base break-words">
                      {item.department}
                    </td>
                    <td className="px-4 py-3 text-sm md:text-base">
                      <DeleteHod
                        id={item._id}
                        name={item.hodName}
                        delHod={delHod}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

        {!loading && hodData.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <h1 className="text-gray-600 font-semibold italic text-lg">
              HOD Data Not Found
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Hod);