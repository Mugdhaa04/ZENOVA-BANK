import React, { useEffect, useState } from "react";
import "./AdminReport.css";

function AdminReport() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");

  // FETCH USERS
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  // DELETE USER
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE"
    }).then(() => {
      setUsers(users.filter(item => item.id !== id));
    });
  };

  // SEARCH
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

      {/* TITLE */}
      <h2 className="title">All Admin Report</h2>

      {/* SEARCH BOX */}
      <div className="search-box">
        <label>Search :</label>

        <input
          type="text"
          placeholder="Search User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setFinalSearch(search)}>Search</button>
        <button onClick={() => { setSearch(""); setFinalSearch(""); }}>
          Reset
        </button>
      </div>

      {/* ADD BUTTON */}
      <div className="add-btn-box">
        <button className="add-btn">Add New User</button>
      </div>

      {/* TABLE */}
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>

                <td>
                  <button className="edit">✏️</button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(item.id)}
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
  );
}

export default AdminReport;