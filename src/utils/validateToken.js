import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { clearCurrentUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export const ValidateToken = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(clearCurrentUser());
        navigate("/");
      } else {
        return;
      }
    } catch (error) {
      console.error("Invalid Token", error);
    }
  } else {
    return;
  }
  return <div>Protected component</div>;
};

export default ValidateToken;
