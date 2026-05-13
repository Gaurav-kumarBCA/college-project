<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { withAuth } from '../components/withAuth';

const Counselling = () => {
   const [counselling,setCounsilling] = useState(null);
 
=======
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { withAuth } from "../components/WithAuth";
import { Trash } from "lucide-react";
import DeleteCounsilling from "../dailogs/DeleteCounsilling";

const Counselling = () => {
  const [counselling, setCounsilling] = useState([]);
  const [loading,setLoading]=useState(false)
>>>>>>> hod

  const delteEnroll=(id)=>{
    setCounsilling((prev)=>prev.filter((data)=>data._id !== id));
  }
 

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
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
      }finally{
        setLoading(false)
      }
       
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      {!counselling.length && loading && (
        <h1 className="text-center mt-50">Loading...</h1>
      )}
      {counselling.length !== 0 && (
        <div className="min-h-[calc(100vh-60px)]">
          <div className="rounded mx-auto max-w-9xl shadow p-6 relative border-2">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Counselling</h2>
              <p className="text-gray-400 text-sm mt-1 hidden md:block">
                A list of all the counselling users in your account including
                their Name and email and necessary information.
              </p>
            </div>

<<<<<<< HEAD
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Counsilling</h2>
            <p className="text-gray-400 text-sm mt-1 hidden md:block  ">
              A list of all the counsilling users in your account including
              their Name and email and neccessary information.
            </p>
          </div>

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
=======
            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block w-full overflow-x-auto rounded border hide-scrollbar">
              <table className="min-w-175 w-full border-collapse">
                <thead className="sticky top-0 z-10 bg-blue-400 text-white border-b border-black">
                  <tr>
                    <th className="px-4 py-3 border-r border-black">No</th>
                    <th className="px-4 py-3 border-r border-black">Course</th>
                    <th className="px-4 py-3 border-r border-black">Name</th>
                    <th className="px-4 py-3 border-r border-black">Email</th>
                    <th className="px-4 py-3 border-r border-black">
                      Passing Year
                    </th>
                    <th className="px-4 py-3 border-r border-black">Phone</th>
                    <th className="px-4 py-3 border-r border-black">
                      Qualification
                    </th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {counselling.map((item, index) => (
>>>>>>> hod
                    <tr
                      key={index}
                      className="border-b border-gray-500 hover:bg-gray-200"
                    >
                      <td className="px-4 py-3 border-r border-black text-center">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 border-r border-black text-center">
                        {item.course}
                      </td>
                      <td className="px-4 py-3 border-r border-black text-center">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 border-r border-black text-center ">
                        {item.email}
                      </td>
                      <td className="px-4 py-3 border-r border-black text-center">
                        {item.passing_year}
                      </td>
                      <td className="px-4 py-3 border-r border-black text-center">
                        {item.phone}
                      </td>
                      <td className="px-4 py-3 text-center border-r ">
                        {item.qualification}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div>
                          <DeleteCounsilling
                            deleteD={delteEnroll}
                            id={item._id}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="block md:hidden space-y-4">
              {counselling?.length > 0 ? (
                counselling.map((item, index) => (
                  // <CardItem key={index} item={item} index={index} />
                  <CardItem
                    key={index}
                    item={item}
                    index={index}
                    deleteD={delteEnroll} // 🔥 important
                  />
                ))
              ) : (
                <p className="text-center py-4">Users not found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default withAuth(Counselling);

// ================= CARD COMPONENT =================
const CardItem = ({ item, index, deleteD }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      {/* Top */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <span className="text-xs text-gray-500">#{index + 1}</span>
      </div>

      {/* Basic Info */}
      <p className="text-sm">
        <span className="font-medium">Course:</span> {item.course}
      </p>

      <p className="text-sm ">
        <span className="font-medium">Email:</span> {item.email}
      </p>

      {/* Expandable */}
      {showMore && (
        <div className="mt-2 space-y-1">
          <p className="text-sm">
            <span className="font-medium">Passing Year:</span>
            {item.passing_year}
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span> {item.phone}
          </p>
          <p className="text-sm">
            <span className="font-medium">Qualification:</span>
            {item.qualification}
          </p>
          <p className="text-sm ">
            <span className="font-medium">Action:</span>

            {/* <button class="relative overflow-hidden z-10 px-4  m-2 text-white bg-black  text-lg rounded-lg group">
              <span class="relative z-10 group-hover:text-black transition duration-500">
                Delete
              </span>

              <span class="absolute inset-0 -z-10 bg-white -left-[20%] -right-[20%] transform -skew-x-45 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span> */}
            {/* </button> */}
            <div className="mt-2 ">
              <DeleteCounsilling deleteD={deleteD} id={item._id} />
            </div>

          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-500 text-sm mt-3 font-medium"
      >
        {showMore ? "Read Less ↑" : "Read More ↓"}
      </button>
    </div>
  );
};



