import { useContext, useEffect, useState } from "react";
import { authStore } from "../stores/auth.store";

export const useAuth = () => {
  const { user, setUser } = useContext(authStore);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Agar token nahi hai to loading false
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const url = import.meta.env.VITE_SERVER_URL;

        const res = await fetch(`${url}/user/me?role=admin`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success && data.data.role === "admin") {
          setUser(data.data);
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUser]);

  return { user, loading };
};