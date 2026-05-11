import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/Hod/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.success) {
        toast.error(data.error);
        return;
      }


      if (data.success) {
        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("reftoken", data.data.refreshToken);
        login(data.data.accessToken, data.data.data);
        // navigate("/");
      }
      
      toast.success("login successfully");
      // setUser(data?.data,"jod ");

      setTimeout(() => {
        navigate("/");
      }, 700);

    } catch (error) {
      console.log(error, "something went wrong ");
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
        onSubmit={handleSubmit}
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
              <Mail className="text-xl text-gray-500" />
              <input
                onChange={inputHandler}
                type="email"
                name="email"
                value={formData.email}
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
              <Lock className="text-xl text-gray-500" />
              <input
                onChange={inputHandler}
                type="password"
                value={formData.password}
                name="password"
                placeholder="••••••••"
                className="w-full px-2 outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-[#007AFF] hover:bg-blue-600 py-3 rounded-xl text-white font-bold transition-all shadow-lg active:scale-[0.98]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
