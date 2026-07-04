import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {

  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("isAdmin");
  navigate("/login");
};

  return (
    <div className="admin-navbar">

      <div className="logo">
        <img src="/images/logo.png" alt="logo" className="nav-logo" />
        ZENOVA
      </div>

      <ul className="nav-menu">

        <li>
          <NavLink to="/" end className="nav-link">HOME</NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">ABOUT</NavLink>
        </li>

        <li>
          <NavLink to="/admin-dashboard" className="nav-link">DASHBOARD</NavLink>
        </li>

        {/* ADD NEW */}
        <li className="dropdown">
          <span onClick={() => setOpenMenu(openMenu === "add" ? null : "add")}>
            ADD NEW ▾
          </span>

          {openMenu === "add" && (
            <ul className="dropdown-menu">

              <li>
                <NavLink to="/add-services">Add Services</NavLink>
              </li>

              <li>
                <NavLink to="/add-transaction">Add Transaction</NavLink>
              </li>

              <li>
                <NavLink to="/add-user">Add User</NavLink>
              </li>

              <li>
                <NavLink to="/add-kyc">Add KYC</NavLink>
              </li>

              <li>
                <NavLink to="/add-account">Add Account</NavLink>
              </li>

            </ul>
          )}
        </li>

        {/* REPORTS */}
        <li className="dropdown">
          <span onClick={() => setOpenMenu(openMenu === "report" ? null : "report")}>
            REPORTS ▾
          </span>

          {openMenu === "report" && (
            <ul className="dropdown-menu">

              <li>
                <NavLink to="/service-report">Service Report</NavLink>
              </li>

              <li>
                <NavLink to="/customer-report">Customer Report</NavLink>
              </li>

            <li>
                <NavLink to="/transaction-report">Transaction Report</NavLink>
              </li>

              <li>
                <NavLink to="/kyc-report">KYC Report</NavLink>
              </li>

              <li>
                <NavLink to="/account-report">Account Report</NavLink>
              </li>

              <li>
                <NavLink to="/admin-report">Admin Report</NavLink>
              </li>

              <li>
                <NavLink to="/feedback-report">Feedback Report</NavLink>
              </li>

            </ul>
          )}
        </li>

        <li onClick={handleLogout} style={{ cursor: "pointer" }}>
          LOGOUT
        </li>

      </ul>
    </div>
  );
}

export default AdminNavbar;