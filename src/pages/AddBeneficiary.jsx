import React, { useState } from "react";
import "./AddUser.css";

function AddBeneficiary() {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    accountNumber: "",
    accountType: "",
    ifsc: "",
    bankName: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // RESET
  const handleReset = () => {
    setData({
      name: "",
      mobile: "",
      email: "",
      address: "",
      city: "",
      state: "",
      country: "",
      accountNumber: "",
      accountType: "",
      ifsc: "",
      bankName: "",
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://zenova-bank-backend.onrender.com/api/beneficiaries/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Beneficiary Added Successfully ✅");
        handleReset();
      } else {
        alert(result.message || "Error adding beneficiary ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="adduser-page">
      <div className="page-title">Add Beneficiary</div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Full Address</label>
              <input
                name="address"
                value={data.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                name="city"
                value={data.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                name="state"
                value={data.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                name="country"
                value={data.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Account Number</label>
              <input
                name="accountNumber"
                value={data.accountNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Account Type</label>
              <input
                name="accountType"
                value={data.accountType}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>IFSC Code</label>
              <input
                name="ifsc"
                value={data.ifsc}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Bank Name</label>
              <input
                name="bankName"
                value={data.bankName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="btn-group">
              <button type="submit">Add Beneficiary</button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBeneficiary;