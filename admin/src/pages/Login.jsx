import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = () => {
  const [loading,setLoading]=useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = async (e) => {
    e.preventDefault();
    if(!form.email || !form.password){
      return alert("Email and Password is required ")
    }
    try {
      setLoading(true)
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      if(!data.success){
        return alert(data.error)
      }
      if(data.data.user.role !== "admin"){
        return alert("Your are not admin")
      }
      const token=data.data.accessToken;
      const refresh=data.data.refreshToken;

      localStorage.setItem("token",token);
      localStorage.setItem("refresh",refresh);

      window.location.href="/"

    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(()=>{
    if(localStorage.getItem("token")){
      window.location.href="/"
    }
  },[])

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#007AFF] p-4">
      <div className="justify-self-center w-full max-w-md p-8 bg-white rounded-2xl shadow-xl flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold italic text-gray-800">
            Login
          </h1>
        </div>

        <form onSubmit={loginSubmit}>
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <CiMail className="text-xl text-gray-500" />
                <input
                  name="email"
                  value={form.email}
                  onChange={(e)=>setForm((prev)=>({...prev,[e.target.name]:e.target.value}))}
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full px-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                <CiLock className="text-xl text-gray-500" />
                <input
                  name="password"
                  value={form.password}
                  onChange={(e)=>setForm((prev)=>({...prev,[e.target.name]:e.target.value}))}
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-2 outline-none bg-transparent"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-[#007AFF] hover:bg-blue-600 my-3 py-3 rounded-xl text-white font-bold transition-all shadow-lg active:scale-[0.98]"
              >
                {loading?"loading....":"Login" }
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
