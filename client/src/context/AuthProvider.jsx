import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/user/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        // console.log(data, "lokesh");

        if (data.success) {
          setUser(data.data);
        } else {
          logout();
          console.log("first");
        }
      } catch (error) {
        console.log(error);
        logout();
        console.log("second");
      } finally {
        setLoading(false);
      }
    };
    // console.log("lokesh")
    fetchUser();
  }, []);

  const login = (newToken, data) => {
    localStorage.setItem("token", newToken);
    setUser(data)
    setToken(newToken);
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ user,setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
