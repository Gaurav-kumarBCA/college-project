import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
<<<<<<< HEAD
import { Loader } from "lucide-react";
import { withAuth } from "../components/withAuth";
=======
import { withAuth } from "../components/WithAuth";
import DeleteUser from "../dailogs/DeleteUser";
import { data } from "react-router-dom";
>>>>>>> hod

const Users = () => {
  const [users, setUser] = useState([]);
  const [loading,setLoading]=useState(false);

  // const deleteUser=(id)=>{
  //   setUser(users.filter((item)=>item._id !==id));
  // }
  
  const deleteUser = (id) => {
    setUser((prev) => prev.filter((user) => user._id !== id));
  };


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/HOD/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setUser(data?.data || []);
      } catch (error) {
        console.log(error, "error");
      }finally{
        setLoading(false)
      }
    };
    fetchUsers();
  }, []);

  return (

    <Layout>
      {!users.length && loading && (
        <h1 className="text-center mt-50">Loading...</h1>
      )}

      {users.length !== 0 && (
        <div className="min-h-[calc(100vh-60px)] px-3 sm:px-6">
          <div className="rounded mx-auto max-w-7xl shadow p-4 sm:p-6 relative border-2 bg-white">
            {/* header */}
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold">Users</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 hidden sm:block">
                A list of all the Users in your account including their Name and
                Email.
              </p>
            </div>

            {/* ✅ Desktop Table */}

            <div className="hidden md:block max-h-100 rounded overflow-auto border">
              <table className="w-full border-collapse">
                <thead className="sticky top-0 z-10 bg-blue-500 text-white">
                  <tr>
                    <th className="px-4 py-3 border-r border-black text-sm">
                      No
                    </th>
                    <th className="px-4 py-3 border-r border-black text-sm">
                      Name
                    </th>
                    <th className="px-4 py-3 border-r border-black text-sm">
                      Email
                    </th>
                    <th className="px-4 py-3 border-r border-black text-sm">
                      Trash
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="px-4 py-3  border-r text-center">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 border-r text-center">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 border-r  text-center">
                        {item.email}
                      </td>
                      <td className="px-4 py-3 border-r  text-center">
                        <div><DeleteUser deleteD={deleteUser} id={item._id} /></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/*  Mobile Cards */}

            <div className="md:hidden space-y-3">
              {users?.length > 0 ? (
                users.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 shadow-sm bg-gray-50"
                  >
                    <p className="text-sm">
                      <span className="font-semibold">No:</span> {index + 1}
                    </p>
                    <p className="text-sm mt-1">
                      <span className="font-semibold">Name:</span> {item.name}
                    </p>
                    <p className="text-sm mt-1 break-all">
                      <span className="font-semibold">Email:</span> {item.email}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center py-4">No Data Found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

<<<<<<< HEAD
export default withAuth(Users);

=======
export default withAuth(Users);
>>>>>>> hod
