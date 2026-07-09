import React, { useState } from "react";
import "./AddUser.css";

function AddUser() {

  const [data, setData] = useState({
    email: "",
    accountType: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    country: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Backend POST request
    try {
      await fetch("http://localhost:5000/api/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      // Success alert
      alert("User Added Successfully");

      // Reset form
      setData({
        email: "",
        accountType: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: "",
        mobile: "",
        nationality: "",
        address: "",
        city: "",
        state: "",
        country: ""
      });

    } catch (error) {
      console.error("Error adding user:", error);
      alert("Error adding user, please try again!");
    }
  };

  const handleReset = () => {
    setData({
      email: "",
      accountType: "",
      password: "",
      firstName: "",
      lastName: "",
      dob: "",
      mobile: "",
      nationality: "",
      address: "",
      city: "",
      state: "",
      country: ""
    });
  };

  return (
    <div className="adduser-page">

      <div className="page-title">User Registration Form</div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label>Email ID</label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Select Account Type</label>
              <select
                name="accountType"
                value={data.accountType}
                onChange={handleChange}
              >
                <option>Indian Account</option>
                <option>NRI Account</option>
              </select>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password"/>
            </div>

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={data.dob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={data.nationality}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Full Address</label>
              <input
                type="text"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={data.state}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={data.country}
                onChange={handleChange}
              />
            </div>

            <div className="btn-group">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;