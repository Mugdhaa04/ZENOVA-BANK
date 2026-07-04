import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">

      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
        <span>ZENOVA</span>
      </div>

      <div className="menu">

        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>

        {!isLoggedIn && (
          <>
            <Link to="/services">SERVICES</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/feedback">FEEDBACK</Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/dashboard">DASHBOARD</Link>
            <span 
              onClick={handleLogout} 
              style={{ cursor: "pointer" }}
            >
              LOGOUT
            </span>
          </>
        )}

      </div>
    </div>
  );
}

export default Navbar;