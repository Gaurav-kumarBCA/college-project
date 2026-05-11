import React, { useEffect, useState } from "react";
import NewCourse from "../dailogs/NewCourse";
import DeleteCourse from "../dailogs/DeleteCourse";
import EditCourse from "../dailogs/EditCourse";
import Layout from "../components/Layout";
import { Loader } from "lucide-react";
import { withAuth } from "../components/withAuth";

const Course = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const addCourse = (NewCourse) => {
    setData([...data, NewCourse]);
  };

  const courseDeleted = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const editCourse = (id, newCourse) => {
    setData(
      data.map((item) => {
        if (item._id !== id) {
          return { ...item, newCourse };
        }
        return (item, newCourse);
      }),
    );
  };

  useEffect(() => {
    const getCourse = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/HOD/getcourse`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCourse();
  }, []);

  return (
    <Layout>
      <div className=" h-[calc(100vh-60px)]   ">
        <div className="max-w-9xl mx-auto  rounded relative shadow p-6 border-3 ">
          {/* Header */}

          <div className="flex justify-between items-center mb-6 ">
            <div>
              <h2 className="text-2xl font-semibold">Courses</h2>
              <p className="text-gray-400 text-sm mt-1 hidden md:block   ">
                A list of all the course in your account including their
                coursename, fees, eligibility and description.
              </p>
            </div>
            <NewCourse add={addCourse} />
          </div>

          <div className="overflow-x-auto max-h-120  overflow-y-scroll hide-scrollbar relative border  rounded ">
            <table className="w-full text-left border-collapse  ">
              <thead className=" text-sm  border-b border-gray-700 sticky top-0  z-10 ">
                <tr className=" z-50 bg-blue-400   text-white ">
                  <th className="py-3 border-r font-semibold border-black  px-2 ">
                    CourseName
                  </th>
                  <th className="py-3 border-r font-semibold border-black px-2 hidden sm:block md:block ">
                    Duration
                  </th>
                  <th className="py-3 border-r font-semibold border-black px-2 ">
                    fees
                  </th>
                  <th className="py-3 border-r font-semibold border-black px-2 hidden sm:block   ">
                    Eligibility
                  </th>
                  <th className="py-3 border-r font-semibold border-black px-2">
                    Active/NA
                  </th>
                  <th className="py-3 border-r font-semibold border-black px-2 hidden sm:block ">
                    Description
                  </th>
                  <th className="py-3  font-semibold border-black px-2  ">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data?.length > 0 ? (
                  data.map((item) => (
                    <tr
                      className="border-b border-gray-700  transition hover:bg-gray-200 "
                      key={item._id}
                    >
                      <td className="py-4 px-2 border-r h ">
                        {item.courseName}
                      </td>
                      <td className="py-4 border-r px-2 hidden sm:table-cell ">
                        {item.duration}
                      </td>
                      <td className="py-4 border-r px-2 ">{item.fees}</td>
                      <td className="py-4 border-r px-2  hidden sm:table-cell">
                        {item.eligibility}
                      </td>
                      <td className="py-4 border-r px-2 ">
                        {item.isActive ? "True" : "False"}{" "}
                      </td>
                      <td className="py-4 hidden sm:table-cell border-r ">
                        {item.description}
                      </td>
                      <td>
                        <div className="flex gap-2  px-3  ">
                          <EditCourse
                            course={editCourse}
                            item={item}
                            id={item._id}
                          />
                          <DeleteCourse deleteD={courseDeleted} id={item._id} />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="">
                      <Loader className="animate-spin" />
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

export default withAuth(Course);

