import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useauth";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        navigate("/login", { replace: true });
      }
    }, [user, loading, navigate]);

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;