import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <div className={classes.content}>Grony</div>
        <div className={classes.menu_container}>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
