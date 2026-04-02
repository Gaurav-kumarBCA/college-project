import {  Pencil, X } from 'lucide-react'
import React, { useState } from 'react'

const EditCourse = ({ id, item, course }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Pencil
        onClick={() => setOpen(true)}
        className="cursor-pointer scale-105  "
      />
      <Dailog open={open} id={id} course={course} item={item} close={onClose} />
    </div>
  );
};

const Dailog = ({ open, close,id,item,course}) => {
  const [input, setInput] = useState({...item});

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    try {
      
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch( `${url}/HOD/updatecourse/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(input),
        },
      );

      const data = await res.json();
      if (!data.success) {
        alert( data.error);
        return;
      }
    } catch (error) {
      console.log(error,"error");
    }finally{
      close(false);
    }
  };

  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 bg-gray-500/50 backdrop-blur-3xl z-100  justify-center items-center min-h-screen w-full`}
    >
      <div className=" bg-white w-120 p-5 mx-4   text-black relative rounded ">
        <h1 className="text-center text-2xl text-sky-700 font-serif">
          Edit Courses
        </h1>

        <button className="absolute top-3 right-4 cursor-pointer">
          <X onClick={close} className="hover:text-red-600 hover:scale-110 " />
        </button>

        <div className="space-y-2 px-3">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans">
              Course Name
            </label>
            <input
              name="courseName"
              value={input.courseName}
              onChange={inputHandler}
              className="border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="course name"
            />
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 font-sans">
                fees
              </label>
              <input
                name="fees"
                value={input.fees}
                onChange={inputHandler}
                className="border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500"
                type="Number"
                placeholder="amount of course"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans">
              Duration
            </label>
            <input
              name="duration"
              value={input.duration}
              onChange={inputHandler}
              className="border-2 border-gray-300 focus:outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 "
              type="text"
              placeholder="duration of course"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans">
              Eligibility
            </label>
            <input
              name="eligibility"
              value={input.eligibility}
              onChange={inputHandler}
              className="border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 rounded-lg"
              type="text"
              placeholder="enter name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans">
              isActive
            </label>
            <input
              name="isActive"
              value={input.isActive}
              onChange={inputHandler}
              className="border-2 border-gray-300  px-4 py-2 rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="enter name"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans">
              Description
            </label>
            <input
              name="description"
              value={input.description}
              onChange={inputHandler}
              className="border-2 border-gray-300  px-4 py-2 rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="enter name"
            />
          </div>

          <button
            onClick={submitHandler}
            className="w-full py-2 rounded-lg  border-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};


export default EditCourse