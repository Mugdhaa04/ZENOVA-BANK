import React, { useState } from "react";
import "./AddAccount.css";

const AddAccount = () => {
  const [formData, setFormData] = useState({
    customer: "",
    branch: "",
    accountType: "",
    openingDate: "",
    nomineeName: "",
    nomineeMobile: "",
    nomineeAddress: "",
    nomineeId: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://zenova-bank-backend.onrender.com/api/accounts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create account");
      }

      alert("Account Created Successfully ✅");

      setFormData({
        customer: "",
        branch: "",
        accountType: "",
        openingDate: "",
        nomineeName: "",
        nomineeMobile: "",
        nomineeAddress: "",
        nomineeId: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message || "Server Error ❌");
    }
  };

  return (
    <div className="page">
      <div className="heading-bar">
        <h2>Account Registration</h2>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="subtitle">Account Creation Form</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Select Customer :</label>
              <select
                name="customer"
                value={formData.customer}
                onChange={handleChange}
              >
                <option value="">Select Customer</option>
                <option>Mugdha Shinde</option>
                <option>Rahul Patil</option>
                <option>Priya Sharma</option>
              </select>
            </div>

            <div className="form-row">
              <label>Select Branch :</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                <option value="">Select Branch</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
              </select>
            </div>

            <div className="form-row">
              <label>Select Account Type :</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="">Select Account Type</option>
                <option>Savings Account</option>
                <option>Current Account</option>
                <option>Fixed Deposit</option>
              </select>
            </div>

            <div className="form-row">
              <label>Opening Date :</label>
              <input
                type="date"
                name="openingDate"
                value={formData.openingDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Customer Photo :</label>
              <input type="file" />
            </div>

            <div className="form-row">
              <label>Nominee Name :</label>
              <input
                type="text"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                placeholder="Nominee Name"
              />
            </div>

            <div className="form-row">
              <label>Nominee Mobile :</label>
              <input
                type="text"
                name="nomineeMobile"
                value={formData.nomineeMobile}
                onChange={handleChange}
                placeholder="Nominee Mobile"
              />
            </div>

            <div className="form-row">
              <label>Nominee Address :</label>
              <input
                type="text"
                name="nomineeAddress"
                value={formData.nomineeAddress}
                onChange={handleChange}
                placeholder="Nominee Address"
              />
            </div>

            <div className="form-row">
              <label>Nominee ID Number :</label>
              <input
                type="text"
                name="nomineeId"
                value={formData.nomineeId}
                onChange={handleChange}
                placeholder="Nominee ID Number"
              />
            </div>

            <div className="form-row">
              <label>Description :</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
            </div>

            <div className="form-row buttons">
              <label></label>
              <div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button type="reset" className="reset-btn">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;