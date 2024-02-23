import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
 return (
  <div>
 <div>Home</div>
 <Link to="Effect">Click to see Effect page</Link><br />
 <Link to="Memo">Click to see Memo page</Link><br />
 <Link to="State">Click to see State page</Link>< br />
 <Link to="HeaderContext">Click to see HeaderContext page</Link>
 </div>
)};

export default Home;
