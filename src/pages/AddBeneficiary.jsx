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
    bankName: ""
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
      bankName: ""
    });
  };

  // SUBMIT (API CALL)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3001/beneficiaries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("Beneficiary Added Successfully ✅");

      handleReset(); // clear form

    } catch (error) {
      console.error("Error:", error);
      alert("Error adding beneficiary ❌");
    }
  };

  return (
    <div className="adduser-page">

      <div className="page-title">
        Add Beneficiary
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label>Name</label>
              <input name="name" value={data.name} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input name="mobile" value={data.mobile} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" value={data.email} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Full Address</label>
              <input name="address" value={data.address} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>City</label>
              <input name="city" value={data.city} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>State</label>
              <input name="state" value={data.state} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Country</label>
              <input name="country" value={data.country} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Account Number</label>
              <input name="accountNumber" value={data.accountNumber} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Account Type</label>
              <input name="accountType" value={data.accountType} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>IFSC Code</label>
              <input name="ifsc" value={data.ifsc} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label>Bank Name</label>
              <input name="bankName" value={data.bankName} onChange={handleChange}/>
            </div>

            {/* BUTTONS */}
            <div className="btn-group">
              <button type="submit">Add Beneficiary</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBeneficiary;