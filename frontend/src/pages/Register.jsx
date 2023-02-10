import React from "react";

export default function Register() {
  return (
    <div>
      <div className="heading">Please register here</div>
      <form
        onSubmit={(e) => {
          alert("submitted");
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
          />
        </div>
        <button className="btn btn-block">Register</button>
      </form>
    </div>
  );
}
