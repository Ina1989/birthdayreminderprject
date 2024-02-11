import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h3>Employee Birthday</h3>
      <Link to="/empdetails" className="link">Employee Details</Link> <br />
      <Link to="/empbirthday" className="link">Today Birthday</Link>
    </div>
  );
}

export default Home;
