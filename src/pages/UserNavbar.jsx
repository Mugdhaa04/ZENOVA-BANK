import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserNavbar.css";

function UserNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // 🔐 logout
    navigate("/login");
  };

  return (
    <div className="admin-navbar">

      {/* LOGO */}
      <div className="logo">ZENOVA</div>

      {/* MENU */}
      <ul className="nav-menu">

        <li>
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink to="/user-dashboard" className="nav-link">
            DASHBOARD
          </NavLink>
        </li>

        {/* DROPDOWN */}
        <li className="dropdown">
          <span className="nav-link">MY ADMINISTRATION ▾</span>

          <ul className="dropdown-menu">
            <li onClick={() => navigate("/beneficiary")}>Add Beneficiary</li>
            <li onClick={() => navigate("/transfer")}>Transfer Money</li>
            <li onClick={() => navigate("/add-transaction")}>Deposit and Withdraw</li>
            <li onClick={() => navigate("/beneficiary")}>My Beneficiary</li>
            <li onClick={() => navigate("/account-report")}>My Accounts</li>
            <li onClick={() => navigate("/feedback")}>Submit Feedback</li>
             </ul>
        </li>

        <li>
          <span className="nav-link logout" onClick={handleLogout}>
            LOGOUT
          </span>
        </li>

      </ul>
    </div>
  );
}

export default UserNavbar;