import React, { useEffect, useState } from "react";
import "./ServiceReport.css";
import { useNavigate } from "react-router-dom";

function ServiceReport() {

  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/services")
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/services/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setServices(services.filter(item => item.id !== id));
    });
  };

  const filteredServices = services.filter((item) =>
    (item.name || "").toLowerCase().includes(search.toLowerCase())
  );

  // ---- Icon helper ----
  const getIcon = (item) => {
    // If saved image is a file name (from predefined icons), prepend /images/
    if(item.image && !item.image.startsWith("/images/")) {
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
        <button className="reset-btn" onClick={() => setSearch("")}>
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
              <tr key={item.id}>

                <td>{item.id}</td>

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
                    onClick={() => navigate(`/add-services/${item.id}`)}
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

export default ServiceReport;