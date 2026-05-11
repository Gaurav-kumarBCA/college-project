import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

export const withAuth = (Wrappedcomponent) => (props) => {
  const { user, loading } = useAuth()

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/login");
      console.log("code spell check");
    }
  }, [loading]);

  return user ? <Wrappedcomponent {...props} /> : <Loading />;
};

const Loading = () => {
  return (
    <div>
      <h1>Please wait</h1>
    </div>
  );
};

