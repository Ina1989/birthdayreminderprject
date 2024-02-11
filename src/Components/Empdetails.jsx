import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
import EmpDataAll from "./EmpdataAll";

function Empdetails() {
  return (
    <div className="container">
      <h3>Employee Details Page</h3>
      <EmpDataAll employee={data} />
      <Link to="/empbirthday" className="link">Today Birthday</Link>
    </div>
  );
}

export default Empdetails;
