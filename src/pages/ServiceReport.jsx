import React, { useEffect, useState } from "react";
import "./ServiceReport.css";
import { useNavigate } from "react-router-dom";

function ServiceReport() {

  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://zenova-bank-backend.onrender.com/api/services")
      .then(res => res.json())
      .then(data => setServices(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://zenova-bank-backend.onrender.com/api/services/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setServices(services.filter(item => item._id !== id));
    });
  };

  const filteredServices = services.filter((item) =>
    (item.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const getIcon = (item) => {
    if (item.image && !item.image.startsWith("/images/")) {
      return `/images/${item.image}`;
    }
    return item.image || "/images/bank.png";
  };

  return (
    <div>

      <div className="page-title">
        All Banking Service Report
      </div>

      <div className="search-box">
        <label>Search :</label>

        <input
          type="text"
          placeholder="Search Category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="search-btn">Search</button>

        <button
          className="reset-btn"
          onClick={() => setSearch("")}
        >
          Reset
        </button>
      </div>

      <button className="add-btn">
        Add New Category
      </button>

      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Category Image</th>
              <th>Category Title</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredServices.map((item) => (
              <tr key={item._id}>

                <td>{item._id}</td>

                <td>
                  <img
                    src={getIcon(item)}
                    alt="service"
                    className="service-img"
                  />
                </td>

                <td>{item.name}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/add-services/${item._id}`)}
                  >
                    ✏️
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
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

export default ServiceReport;