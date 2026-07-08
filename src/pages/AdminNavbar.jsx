import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/login");

    setMenuOpen(false);
    setAddOpen(false);
    setReportOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAddOpen(false);
    setReportOpen(false);
  };

  return (
    <nav className="admin-navbar">

      {/* LOGO */}
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
        <span>ZENOVA</span>
      </div>

      {/* MENU ICON */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <li>
          <NavLink
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={closeMenu}
          >
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin-dashboard"
            className="nav-link"
            onClick={closeMenu}
          >
            DASHBOARD
          </NavLink>
        </li>

        {/* ADD NEW */}
        <li
          onMouseEnter={() => setAddOpen(true)}
          onMouseLeave={() => setAddOpen(false)}
        >
          <div
            className="nav-link"
            onClick={() => setAddOpen(!addOpen)}
          >
            ADD NEW ▾
          </div>

          {addOpen && (
            <ul className="mobile-dropdown">

              <li
                onClick={() => {
                  navigate("/add-services");
                  closeMenu();
                }}
              >
                Add Services
              </li>

              <li
                onClick={() => {
                  navigate("/add-transaction");
                  closeMenu();
                }}
              >
                Add Transaction
              </li>

              <li
                onClick={() => {
                  navigate("/add-user");
                  closeMenu();
                }}
              >
                Add User
              </li>

              <li
                onClick={() => {
                  navigate("/add-kyc");
                  closeMenu();
                }}
              >
                Add KYC
              </li>

              <li
                onClick={() => {
                  navigate("/add-account");
                  closeMenu();
                }}
              >
                Add Account
              </li>

            </ul>
          )}
        </li>

        {/* REPORTS */}
        <li
          onMouseEnter={() => setReportOpen(true)}
          onMouseLeave={() => setReportOpen(false)}
        >
          <div
            className="nav-link"
            onClick={() => setReportOpen(!reportOpen)}
          >
            REPORTS ▾
          </div>

          {reportOpen && (
            <ul className="mobile-dropdown">

              <li
                onClick={() => {
                  navigate("/service-report");
                  closeMenu();
                }}
              >
                Service Report
              </li>

              <li
                onClick={() => {
                  navigate("/customer-report");
                  closeMenu();
                }}
              >
                Customer Report
              </li>

              <li
                onClick={() => {
                  navigate("/transaction-report");
                  closeMenu();
                }}
              >
                Transaction Report
              </li>

              <li
                onClick={() => {
                  navigate("/kyc-report");
                  closeMenu();
                }}
              >
                KYC Report
              </li>

              <li
                onClick={() => {
                  navigate("/account-report");
                  closeMenu();
                }}
              >
                Account Report
              </li>

              <li
                onClick={() => {
                  navigate("/admin-report");
                  closeMenu();
                }}
              >
                Admin Report
              </li>

              <li
                onClick={() => {
                  navigate("/feedback-report");
                  closeMenu();
                }}
              >
                Feedback Report
              </li>

            </ul>
          )}
        </li>

        {/* LOGOUT */}
        <li>
          <span
            className="nav-link logout"
            onClick={handleLogout}
          >
            LOGOUT
          </span>
        </li>

      </ul>

    </nav>
  );
}

export default AdminNavbar;