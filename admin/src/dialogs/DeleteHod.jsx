import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const DeleteHod = ({ id, name, delHod }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <div>
      <FaTrash
        onClick={() => setOpen(true)}
        className='text-red-600 hover:text-red-800 cursor-pointer size-5 sm:size-6'
      />

      {open && (
        <RemoveHod
          id={id}
          name={name}
          onClose={onClose}
          delHod={delHod}
        />
      )}
    </div>
  );
};

const RemoveHod = ({ id, name, onClose, delHod }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteHod = async () => {
    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(`${url}/admin/hod/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.error || "Failed to delete HOD!");
        return;
      }

      delHod(id);
      onClose();

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">

      {/* Modal Box */}
      <div className="w-full max-w-sm sm:max-w-md 
      bg-white rounded-2xl shadow-xl p-4 sm:p-5 flex flex-col gap-3">

        {/* Icon */}
        <div className="flex justify-center">
          <FaTrash className="text-3xl sm:text-4xl text-red-600" />
        </div>

        {/* Title */}
        <h1 className="text-center text-sm sm:text-base md:text-lg font-bold italic text-gray-800 break-words">
          Are you sure you want to delete "{name}"?
        </h1>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* Description */}
        <p className="text-center text-xs sm:text-sm text-gray-500">
          Once deleted, this HOD's data will be permanently removed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-2">

          <button
            onClick={onClose}
            className="w-full sm:w-1/2 border border-gray-300 
            text-blue-700 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleDeleteHod}
            className="w-full sm:w-1/2 bg-red-600 text-white 
            py-2 rounded-md font-semibold shadow 
            active:scale-[0.97] transition"
          >
            {loading ? "Deleting..." : "Yes, Delete"}
          </button>

        </div>

      </div>
    </div>
  );
};

export default DeleteHod;