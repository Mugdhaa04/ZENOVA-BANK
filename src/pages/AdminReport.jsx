import React, { useEffect, useState } from "react";
import "./AdminReport.css";

function AdminReport() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");

  useEffect(() => {
    fetch("https://zenova-bank-backend.onrender.com/api/users")
      .then(res => res.json())
      .then(data => setUsers(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://zenova-bank-backend.onrender.com/api/users/${id}`, {
      method: "DELETE"
    }).then(() => {
      setUsers(users.filter(item => item._id !== id));
    });
  };

  const filteredData =
    finalSearch === ""
      ? users
      : users.filter((item) =>
          item.name?.toLowerCase().includes(finalSearch.toLowerCase()) ||
          item.email?.toLowerCase().includes(finalSearch.toLowerCase()) ||
          item.city?.toLowerCase().includes(finalSearch.toLowerCase())
        );

  return (
    <div className="admin-page">

      <h2 className="title">All Admin Report</h2>

      <div className="search-box">
        <label>Search :</label>

        <input
          type="text"
          placeholder="Search User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setFinalSearch(search)}>
          Search
        </button>

        <button
          onClick={() => {
            setSearch("");
            setFinalSearch("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="add-btn-box">
        <button className="add-btn">
          Add New User
        </button>
      </div>

      <div className="table-wrapper">

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

            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item._id}>

                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>

                  <td>
                    <button className="edit">✏️</button>

                    <button
                      className="delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      🗑
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Data Found</td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminReport;