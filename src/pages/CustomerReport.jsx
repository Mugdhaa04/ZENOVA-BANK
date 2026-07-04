import React, { useEffect, useState } from "react";
import "./CustomerReport.css";
import { useNavigate } from "react-router-dom";

function CustomerReport() {

  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setCustomers(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  // 🔥 DELETE FUNCTION
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setCustomers(customers.filter(item => item.id !== id));
    });
  };

  const filteredCustomers = customers.filter((item) =>
    (item.name || item.firstName || "")
      .toLowerCase()
      .includes(finalSearch.toLowerCase())
  );

  return (
    <div className="customer-page">

      <div className="page-title">
        All Customer Report
      </div>

      <div className="search-box">
        <label>Search :</label>

        <input
          type="text"
          placeholder="Search User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button 
          className="search-btn"
          onClick={() => setFinalSearch(search)}
        >
          Search
        </button>

        <button 
          className="reset-btn" 
          onClick={() => {
            setSearch("");
            setFinalSearch("");
          }}
        >
          Reset
        </button>
      </div>

      <button 
        className="add-btn"
        onClick={() => navigate("/add-user")}
      >
        Add New User
      </button>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredCustomers.map((item) => (
              <tr key={item.id}>

                <td>{item.id}</td>

                <td>
                  {item.name 
                    ? item.name 
                    : `${item.firstName || ""} ${item.lastName || ""}`
                  }
                </td>

                <td>{item.mobile || item.contact || ""}</td>

                <td>{item.email}</td>

                <td>{item.city}</td>

                <td>
                  <button 
                    className="edit-btn"
                    onClick={() => navigate(`/add-user/${item.id}`)}
                  >
                    ✏️
                  </button>

                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    🗑
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

export default CustomerReport;