import { useState } from "react";
import { CiMail, CiLock, CiTextAlignJustify } from "react-icons/ci";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const {login} = useAuth();


  const inputHandler = (e) => {
    const eleName = e.target.name;
    const eleValue = e.target.value;
    setForm({ ...form, [eleName]: eleValue });
    setError("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        login(
          data.data.accessToken,
          data.data.user, 
        );
        navigate(from);
      }
      // console.log(data.data.accessToken,"access", data.data.refreshToken,"refresh")
      if (!data.success) {
        setError(data.error);
      }
      // console.log(data, "data")
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#007AFF] p-4">
      <form
        onSubmit={submitHandler}
        className="justify-self-center w-full max-w-md p-8 bg-white rounded-2xl shadow-xl flex flex-col gap-6"
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold italic text-gray-800">
            Login
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              <CiMail className="text-xl text-gray-500" />
              <input
                type="email"
                placeholder="example@mail.com"
                name="email"
                value={form.email}
                onChange={inputHandler}
                className="w-full px-2 outline-none bg-none"
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
                type="password"
                placeholder="******"
                name="password"
                value={form.password}
                onChange={inputHandler}
                className="w-full px-2 outline-none bg-transparent"
              />
            </div>
            <p className="text-red-500 font-semibold italic">{error}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#007AFF] hover:bg-blue-600 py-3 rounded-xl text-white font-bold transition-all shadow-lg active:scale-[0.98]"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#007AFF] font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
