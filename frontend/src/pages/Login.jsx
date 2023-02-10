import React from "react";

export default function Login() {
  return (
    <div>
      <div className="heading">Please login to your account</div>
      <form
        onSubmit={(e) => {
          alert("submitted");
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="btn btn-block">Login</button>
      </form>
    </div>
  );
}
