import { useState } from "react";
import { CiMail, CiUser, CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { login } = useAuth();

  // console.log(form)

  const inputHandler = (e) => {
    const name = e.target.name;
    const eleValue = e.target.value;
    setForm({ ...form, [name]: eleValue });
    setError("");
  };

  setTimeout(() => {
    setError("");
  }, 2000);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (form.password.length < 7) {
      setError("Password length must be 8 digit");
      return;
    }
    if (form.password !== form.confirm_password) {
      setError("Password mismatch");
      return;
    }

    try {
      setLoading(true);
      const { confirm_password, ...formData } = form;
      // console.log(formData)
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data, "data");
      if (!data.success) {
        setError(data.error);
        return;
      }

      const loginRes = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
      const loginData = await loginRes.json();
      console.log(loginData, "login");
      if (loginData.success) {
        localStorage.setItem("token", loginData.data.accessToken);
        localStorage.setItem("refreshToken", loginData.data.refreshToken);
        toast.success("Create account successfully");
        setTimeout(() => {
          navigate("/");
          login(
            loginData.data.accessToken,
            loginData.data.user, 
          );
        }, 500);
      }
      // navigate("/")
    } catch (error) {
      console.log(error.error, "lokesh");
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#007AFF] p-4">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />

      <form
        onSubmit={submitHandler}
        className="justify-self-center w-full max-w-md  shadow-md shadow-gray-500 p-8 bg-white rounded-2xl  flex flex-col gap-6 transition-all duration-300 hover:shadow-gray-700 hover:shadow-xl"
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold italic text-gray-800">
            Register
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              <CiUser className="text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={form.name}
                onChange={inputHandler}
                className="w-full px-2 outline-none bg-transparent"
              />
            </div>
          </div>

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
                type="password"
                placeholder="******"
                name="password"
                value={form.password}
                onChange={inputHandler}
                className="w-full px-2 outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
              <CiLock className="text-xl text-gray-500" />
              <input
                type="password"
                placeholder="******"
                name="confirm_password"
                value={form.confirm_password}
                onChange={inputHandler}
                className="w-full px-2 outline-none bg-transparent"
              />
            </div>
            <p className="text-red-500 font-bold italic">{error}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#007AFF] hover:bg-blue-600 py-3 rounded-xl text-white font-bold transition-all shadow-lg active:scale-[0.98]"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#007AFF] font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
