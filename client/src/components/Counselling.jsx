import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Layout from "./Layout";
import { User, Mail, Phone, GraduationCap, Calendar } from "lucide-react";

const Counselling = () => {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // const courseFromUrl = searchParams.get("course");

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course:  "",
    qualification: "",
    passing_year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const token = localStorage.getItem("token");
      // console.log(token, url)
        
      if (!/^\d{10}$/.test(formData.phone)) {
        alert("Enter a valid 10-digit phone number");
        return;
      }
      
        if (formData.phone.length !== 10) {
        alert("Phone number must have 10 digits");
        return;
      }
      if (!token) {
        navigate("/login");
        return;
      }
      // console.log("lokesh")
      const res = await fetch(`${url}/user/counselling/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // console.log(data, "this is data in counselling")

      if (!data.success) {
        setError(data.message);
        return;
      }

      toast.success(data.message);

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <ToastContainer position="bottom-right" autoClose={1500} />

      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">

        <div className="max-w-xl w-full backdrop-blur-lg bg-white/80 border border-white/30 p-10 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
             Counselling Application
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                required
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                required
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                required
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Course */}
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="course"
                placeholder="Course"
                value={formData.course}
                required
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Qualification */}
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="qualification"
                placeholder="Highest Qualification"
                value={formData.qualification}
                required
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {/* Passing Year */}
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="number"
                name="passing_year"
                placeholder="Passing Year"
                value={formData.passing_year}
                required
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>

            {error && (
              <p className="text-red-500 font-semibold text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Submit Application 
            </button>

          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Counselling;