import { Trash, X } from "lucide-react";
import React, { useState } from "react";

const DeleteCourse = ({ deleteD , id}) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <div>
      <Trash
        onClick={() => {
          setOpen(true);
        }}
        className="text-red-500 cursor-pointer hover:scale-105"
      />
      <Dailog open={open} close={close} deleteD={deleteD} id={id} />
    </div>
  );
};

const Dailog = ({ open, close , deleteD , id }) => {

  const courseDelete = async () => {
    
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/HOD/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      console.log(data,"hi delete data");
      deleteD();
      close();
      if (!data.success) {
        alert(data.error || "something went wrong");
        console.log(data.error || "something went wrong");
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 bg-gray-500/50 backdrop-blur-3xl z-20  justify-center items-center min-h-screen w-full`}
    >
      <div className=" bg-white w-100 p-5 mx-4  text-black  relative rounded  cursor-pointer">
        <h3 className="text-center text-black font-medium font-sans">
          Are you sure you want to delete this Course
        </h3>
        <X
          onClick={close}
          className="hover:text-red-500 absolute top-3 right-3 text-black hover:scale-110"
        />
        <div className="flex justify-center gap-5 m-3 cursor-pointer ">
          <button
            onClick={close}
            className="  bg-[#6B7280] text-white rounded-lg  px-5 py-1 cursor-pointer hover:bg-gray-700 font-bold  "
          >
            Cancel
          </button>
          <button onClick={courseDelete} className=" bg-red-500 rounded-lg  px-5 py-1 cursor-pointer hover:bg-red-700 text-white font-bold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCourse;
