import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Loader } from "lucide-react";
import { withAuth } from "../components/WithAuth";

const Users = () => {
  const [users, setUser] = useState(null);
  const [loading,setLoading]=useState(false);

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
      <div className="min-h-[calc(100vh-60px)]     ">
        <div className=" rounded mx-auto  max-w-9xl shadow p-6   relative border-2">
          {/* header  */}

            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Users</h2>
              <p className="text-gray-400 text-sm mt-1 hidden md:block  ">
                A list of all the Users in your account including their
                Name and Email .
              </p>
            </div>
        
          {/* table  */}

          <div className=" max-h-110   rounded overflow-x-auto overflow-y-scroll  hide-scrollbar border ">
            <table className=" w-full border-collapse  ">
              <thead className="sticky top-0 z-10 bg-blue-400 text-white border-b border-black">
                <tr>
                  <th className="px-4 py-3 border-black border-r   text-sm sm:text-base font-medium">
                    No
                  </th>
                  <th className="px-4 py-3 border-black border-r  text-sm sm:text-base font-medium">
                    Name
                  </th>
                  <th className="px-4 py-3 border-black  text-sm sm:text-base font-medium">
                    Email
                  </th>
                </tr>
              </thead>

              <tbody>
                {users?.length > 0 ? (
                  users.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-500 hover:bg-gray-200"
                    >
                      <td className="px-4 border-r border-black  py-3 text-sm sm:text-base text-center">
                        {index + 1}
                      </td>
                      <td className="px-4 border-r border-black py-3 text-sm sm:text-base text-center ">
                        {item.name}
                      </td>
                      <td className="px-4  border-black py-3 text-sm sm:text-base text-center">
                        {item.email}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className=" py-4 text-center">
                      <Loader className="animate-spin  "/>
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

export default withAuth(Users);

// export default Users;