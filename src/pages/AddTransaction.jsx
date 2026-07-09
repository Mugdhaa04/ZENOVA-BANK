import React, { useState } from "react";
import "./AddTransaction.css";

function AddTransaction() {

  const [data, setData] = useState({
    accountNumber: "",
    transactionType: "",
    transferMethod: "",
    amount: "",
    date: "",
    description: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/transactions/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("Transaction Added Successfully");

    setData({
      accountNumber: "",
      transactionType: "",
      transferMethod: "",
      amount: "",
      date: "",
      description: ""
    });
  };

  const handleReset = () => {
    setData({
      accountNumber: "",
      transactionType: "",
      transferMethod: "",
      amount: "",
      date: "",
      description: ""
    });
  };

  return (
    <div className="transaction-page">

      <div className="page-title">
        Transaction Entry Form
      </div>

      <div className="sub-heading">
        Account Transaction : Entry Form
      </div>

      <div className="form-container">

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Account Number :</label>
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={data.accountNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Transaction Type :</label>
            <select
              name="transactionType"
              value={data.transactionType}
              onChange={handleChange}
            >
              <option>Select Type</option>
              <option>Deposit</option>
              <option>Withdraw</option>
            </select>
          </div>

          <div className="form-group">
            <label>Transfer Method :</label>
            <select
              name="transferMethod"
              value={data.transferMethod}
              onChange={handleChange}
            >
              <option>Select Transfer Method</option>
              <option>Online</option>
              <option>Cash</option>
              <option>Cheque</option>
            </select>
          </div>

          <div className="form-group">
            <label>Amount :</label>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={data.amount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date :</label>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description :</label>
            <textarea
              name="description"
              placeholder="Transaction Description"
              value={data.description}
              onChange={handleChange}
            />
          </div>

          <div className="btn-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default AddTransaction;