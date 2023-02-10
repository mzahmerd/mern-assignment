import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul style={{listStyle:"none"}}>
      <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <button>Logout</button>
      </ul>
    </div>
  );
}
