import React, { useState } from "react";
import "./DepositWithdraw.css";

function DepositWithdraw() {

  const [formData, setFormData] = useState({
    accountNumber: "",
    transactionType: "",
    transferMethod: "",
    amount: "",
    date: "",
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

    fetch("http://localhost:5000/api/transactions/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(() => {
        alert("Transaction Added Successfully");
        setFormData({
          accountNumber: "",
          transactionType: "",
          transferMethod: "",
          amount: "",
          date: "",
          description: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="form-page">

      {/* MAIN HEADING */}
      <h2 className="title">Deposit and Withdraw Amount</h2>

      <div className="form-box">
        {/* SUB HEADING */}
        <h3 className="sub-title">
          Deposit and Withdraw Amount : Entry Form
        </h3>

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <label>Account Number :</label>
            <select
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            >
              <option value="">Select Account Number</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="form-row">
            <label>Transaction Type :</label>
            <select
              name="transactionType"
              value={formData.transactionType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdraw">Withdraw</option>
            </select>
          </div>

          <div className="form-row">
            <label>Transfer Method :</label>
            <select
              name="transferMethod"
              value={formData.transferMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Transfer Method</option>
              <option value="Cash">Cash</option>
              <option value="ATM">ATM</option>
              <option value="Online">Online</option>
              <option value="Cheque">Cheque</option>
              <option value="UPI">UPI</option>
            </select>
          </div>

          <div className="form-row">
            <label>Amount :</label>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Date :</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Description :</label>
            <textarea
              name="description"
              placeholder="Transaction Description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="btn-group">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="reset" className="reset-btn">Reset</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default DepositWithdraw;