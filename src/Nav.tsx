import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const linkStyle = {
  textDecoration: "none",
  color: "black",
};
const nav = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  minHeight: "8vh",
  backgroundColor: "rgb(158, 207, 102)",
  textDecoration: "none",
  color: "white",
  fontSize: "large",
};
const links = {
  width: "50%",
  display: "flex",
  justifyContent: "space-around",
  textDecoration: "none",
  alignItems: "center",
  listStyle: "none",
};
function Nav() {
  const navigate = useNavigate()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("emailId")!=null){
      setIsLoggedIn(true)
    }
  },[])
  const logout = () =>{
    sessionStorage.clear()
    navigate("/")
  }
  return (
    <div>
      <nav style={nav}>
        <ul style={links}>
          <li>
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/login">
              Login
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
            <Link style={linkStyle} to="/add">
              Add
            </Link>
          </li>
          ) : ("")}
          {isLoggedIn ? (
            <li>
            <Link style={linkStyle} to="/" onClick={()=>logout()}>
              Logout
            </Link>
          </li>
          ) : ("")}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
