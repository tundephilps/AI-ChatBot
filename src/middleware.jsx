import { useNavigate } from "react-router-dom";
import Login from "./Pages/Login";

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if (!token) {
      navigate("/login");
      return <Login />;
    }

    return <Component {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
