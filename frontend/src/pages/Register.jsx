import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    user,
    isError,
    isSuccess,
    message
  } = useSelector((state)=>state.auth)

  useEffect(() =>{
    if(isError){
        alert(message)
    }

    // redirect when success
    if(isSuccess || user){
        navigate('/')
    }

    // reset state props
    dispatch(reset())
  },[dispatch, navigate, message, isError, user, isSuccess])
  
  const onDataChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    dispatch(register(userData));
  };
  return (
    <div>
      <div className="heading">Please register here</div>
      <form
        onSubmit={onSubmit}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            onChange={onDataChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            onChange={onDataChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            onChange={onDataChange}
          />
        </div>
        <button className="btn btn-block">Register</button>
      </form>
    </div>
  );
}
