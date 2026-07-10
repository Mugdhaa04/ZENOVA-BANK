import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountReport.css";

function AccountReport() {

  const [accounts, setAccounts] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://zenova-bank-backend.onrender.com/api/accounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  }, []);

  const filteredData = accounts.filter((acc) =>
    (acc.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    await fetch(`https://zenova-bank-backend.onrender.com/api/accounts/${id}`, {
      method: "DELETE",
    });

    setAccounts((prev) => prev.filter((acc) => acc._id !== id));
  };

  const toggleStatus = (id) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc._id === id ? { ...acc, active: !acc.active } : acc
      )
    );
  };

  return (
    <div className="account-report-page">

      <div className="report-title">
        All Account Report
      </div>

      <div className="report-container">

        <div className="search-box">
          <label>Search :</label>

          <input
            type="text"
            placeholder="Search Account"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>Search</button>

          <button
            className="reset-btn"
            onClick={() => setSearch("")}
          >
            Reset
          </button>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/add-user")}
        >
          Add New Account
        </button>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Photo</th>
              <th>Account Type</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Branch Name</th>
              <th>Opening Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((acc) => (
              <tr key={acc._id}>
                <td>{acc._id}</td>
                <td>{acc.name}</td>

                <td>
                  <img
                    src={acc.photo}
                    alt={acc.name}
                    className="customer-photo"
                  />
                </td>

                <td>{acc.type}</td>
                <td>{acc.mobile}</td>
                <td>{acc.email}</td>
                <td>{acc.branch}</td>
                <td>{acc.date}</td>

                <td className="action-buttons">

                  <button
                    className="icon-btn view"
                    onClick={() => navigate("/transfer-report")}
                  >
                    <i className="fas fa-eye"></i>
                  </button>

                  <button
                    className="icon-btn edit"
                    onClick={() => navigate("/transaction-report")}
                  >
                    <i className="fas fa-pen"></i>
                  </button>

                  <button
                    className="icon-btn copy"
                    onClick={() => navigate("/kyc-report")}
                  >
                    <i className="fas fa-copy"></i>
                  </button>

                  <button
                    className="icon-btn status"
                    onClick={() => toggleStatus(acc._id)}
                  >
                    <i
                      className={
                        acc.active
                          ? "fas fa-toggle-on"
                          : "fas fa-toggle-off"
                      }
                    ></i>
                  </button>

                  <button
                    className="icon-btn delete"
                    onClick={() => handleDelete(acc._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default AccountReport;
