import React from "react";
import { Link } from "react-router-dom";
import data from "./data.js";
import Empdata from "./Empdata.jsx";

function Empbirthday() {
  return (
    <div className="container">
      <h3>Today Birthday</h3>
      <Empdata employee={data} />
      <Link to="/empdetails" className="link">
        Employee Details
      </Link>
    </div>
  );
}

export default Empbirthday;
