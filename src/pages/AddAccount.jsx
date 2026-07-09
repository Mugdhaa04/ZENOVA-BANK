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
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => {
      alert("Account Created Successfully");
    });
  };

  return (
    <div className="page">

      <div className="heading-bar">
        <h2>Account Registration</h2>
      </div>

      <div className="card">
        <div className="card-body">

          <h4 className="subtitle">Account Creation Form</h4>
          <hr/>

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <label>Select Customer :</label>
              <select name="customer" onChange={handleChange}>
                <option>Select Customer</option>
                <option>Mugdha Shinde</option>
                <option>Rahul Patil</option>
                <option>Priya Sharma</option>
              </select>
            </div>

            <div className="form-row">
              <label>Select Branch :</label>
              <select name="branch" onChange={handleChange}>
                <option>Select Branch</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
              </select>
            </div>

            <div className="form-row">
              <label>Select Account Type :</label>
              <select name="accountType" onChange={handleChange}>
                <option>Select Account Type</option>
                <option>Savings Account</option>
                <option>Current Account</option>
                <option>Fixed Deposit</option>
              </select>
            </div>

            <div className="form-row">
              <label>Opening Date :</label>
              <input type="date" name="openingDate" onChange={handleChange}/>
            </div>

            <div className="form-row">
              <label>Customer Photo :</label>
              <input type="file"/>
            </div>

            <div className="form-row">
              <label>Nominee Name :</label>
              <input type="text" name="nomineeName" placeholder="Nominee Name" onChange={handleChange}/>
            </div>

            <div className="form-row">
              <label>Nominee Mobile :</label>
              <input type="text" name="nomineeMobile" placeholder="Nominee Mobile" onChange={handleChange}/>
            </div>

            <div className="form-row">
              <label>Nominee Address :</label>
              <input type="text" name="nomineeAddress" placeholder="Nominee Address" onChange={handleChange}/>
            </div>

            <div className="form-row">
              <label>Nominee ID Number :</label>
              <input type="text" name="nomineeId" placeholder="Nominee ID Number" onChange={handleChange}/>
            </div>

            <div className="form-row">
              <label>Description :</label>
              <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
            </div>

            <div className="form-row buttons">
              <label></label>
              <div>
                <button type="submit" className="submit-btn">Submit</button>
                <button type="reset" className="reset-btn">Reset</button>
              </div>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
};

export default AddAccount;