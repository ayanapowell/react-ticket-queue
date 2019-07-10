import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="jumbotron">
      <h1>Help queue!</h1>
      <Link to="/">Home </Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
