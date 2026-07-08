import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setOpen(false);
  };

  return (

    <div className="navbar">

      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
        <span>ZENOVA</span>
      </div>

      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <div className={`menu ${open ? "active" : ""}`}>

        <Link to="/" onClick={() => setOpen(false)}>
          HOME
        </Link>

        <Link to="/about" onClick={() => setOpen(false)}>
          ABOUT
        </Link>

        {!isLoggedIn && (
          <>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
            >
              SERVICES
            </Link>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
            >
              LOGIN
            </Link>

            <Link
              to="/feedback"
              onClick={() => setOpen(false)}
            >
              FEEDBACK
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
            >
              DASHBOARD
            </Link>

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