import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserNavbar.css";

function UserNavbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (

    <nav className="user-navbar">

      <div className="user-logo">
        <img src="/images/logo.png" alt="logo" />
        <span>ZENOVA</span>
      </div>

      <div
        className="user-menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "user-nav-menu active" : "user-nav-menu"}>

        <li>
          <NavLink
            to="/"
            className="user-nav-link"
            onClick={closeMenu}
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="user-nav-link"
            onClick={closeMenu}
          >
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user-dashboard"
            className="user-nav-link"
            onClick={closeMenu}
          >
            DASHBOARD
          </NavLink>
        </li>

        <li
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >

          <div
            className="user-nav-link"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            MY ADMINISTRATION ▾
          </div>

          {dropdownOpen && (

            <ul className="mobile-dropdown">

              <li onClick={() => {
                navigate("/beneficiary");
                closeMenu();
              }}>
                Add Beneficiary
              </li>

              <li onClick={() => {
                navigate("/transfer");
                closeMenu();
              }}>
                Transfer Money
              </li>

              <li onClick={() => {
                navigate("/add-transaction");
                closeMenu();
              }}>
                Deposit & Withdraw
              </li>

              <li onClick={() => {
                navigate("/beneficiary");
                closeMenu();
              }}>
                My Beneficiary
              </li>

              <li onClick={() => {
                navigate("/account-report");
                closeMenu();
              }}>
                My Accounts
              </li>

              <li onClick={() => {
                navigate("/feedback");
                closeMenu();
              }}>
                Submit Feedback
              </li>

            </ul>

          )}

        </li>

        <li>
          <span
            className="user-nav-link logout"
            onClick={handleLogout}
          >
            LOGOUT
          </span>
        </li>

      </ul>

    </nav>

  );

}

export default UserNavbar;