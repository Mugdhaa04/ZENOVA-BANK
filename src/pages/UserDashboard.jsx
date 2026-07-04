import React from "react";
import "./UserDashboard.css";
import UserNavbar from "./UserNavbar";

function UserDashboard() {
  return (
    <>
      <UserNavbar />

      <div className="user-container">

        <div className="user-box">

          <div className="user-row">

            {/* LEFT */}
            <div className="user-sidebar">

              <h2 className="user-heading">User Dashboard</h2>

              <button>Home</button>
              <button>Add Beneficiary</button>
              <button>Deposit and Withdraw</button>
              <button>Transfer Money</button>
              <button>My Beneficiary</button>
              <button>My Accounts</button>
              <button>Submit Feedback</button>
              <button>My Profile</button>

            </div>

            {/* RIGHT */}
            <div className="user-content">
              <img
                src="/images/about.png"
                alt="bank"
                className="user-img"
              />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default UserDashboard;