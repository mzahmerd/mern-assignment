import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login, reset } from "../features/auth/authSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onDataChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div>
      <div className="heading">Please login to your account</div>
      <form
        onSubmit={onSubmit}
      >
        <div className="form-group">
          <input 
          type="email" 
          name="email"
          id="email"
          placeholder="Enter your email" 
          value={email}
          onChange={onDataChange}
          />
        </div>
        <div className="form-group">
          <input 
          type="password"
          name="password"
          id="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={onDataChange}
          />
        </div>
        <button className="btn btn-block">Login</button>
      </form>
    </div>
  );
}
