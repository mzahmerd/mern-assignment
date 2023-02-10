import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  
  const onLogout = (evt) => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <div className="header">
      {user ? (
        <ul align={"right"}>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <button onClick={onLogout} className="btn ">
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
