import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

function Nav() {
  return (
    <div className="nav">
      <h2 className="nav-brand">Humble !</h2>

      <ul className="menu">
        <li>
          <Link to="/" style={{ textDecoration: "none" }} className="menu-btn">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/newblog"
            style={{ textDecoration: "none" }}
            className="menu-btn"
          >
            New Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
