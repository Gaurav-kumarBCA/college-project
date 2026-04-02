import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  // console.log(user,'authprovidier user');
  const [loading, setLoading] = useState(true);
  // console.log(loading,'authprovider loading');
  const navigate = useNavigate();


  const login = (newToken, data) => {
    localStorage.setItem("token", newToken);
    setUser(data);
    setToken(newToken);
  };

  // const logOut = () => {
  //   localStorage.removeItem("token");
  //   setToken(null);
  //   navigate("/login");
  // };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null); // ✅ add this
    navigate("/login");
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     if (!token) {
  //       console.log("No token → API cancel");
  //       return;
  //     }

  //     try {
  //       const url = import.meta.env.VITE_SERVER_URL;
  //       const res = await fetch(`${url}/HOD/getProfile`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });

  //       const data = await res.json();
  //       setUser(data?.data);

  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, [token]);

  // if (!token) {
  //   console.log("No token → API cancel");
  //   setLoading(false); // ✅ ADD THIS
  //   return;
  // }

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        console.log("No token → API cancel");
        setLoading(false); // FIX
        return;
      }

      try {
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/HOD/getProfile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        setUser(data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);



  return (
    <AuthContext.Provider value={{ user,loading, setUser, logOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
