import React from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-container">

      <div className="admin-box">

        <div className="admin-row">

          {/* LEFT SIDE */}
          <div className="admin-sidebar">

            <h2 className="admin-heading">Admin Dashboard</h2>

            <button>Home</button>
            <button>About</button>
            <button>Add New Services</button>
            <button>Add New Transaction</button>
            <button>Add New User</button>
            <button>Add KYC</button>
            <button>Add Account</button>
            <button>Service Report</button>
            <button>Customer Report</button>
            <button>Transaction Report</button>
            <button>KYC Report</button>
            <button>Account Report</button>
             <button>Admin Report</button>
              <button> Feedback Report</button>

          </div>

          {/* RIGHT SIDE */}
          <div className="admin-content">
            <img
              src="/images/about.png"
              alt="online banking"
              className="dashboard-img"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;