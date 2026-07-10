import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddTransaction.css";

function TransferForm() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    accountNumber: "",
    transferType: "",
    amount: "",
    date: "",
    description: ""
  });

  const [error, setError] = useState("");

  const availableBalance = 10000;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(data.amount) > availableBalance) {
      setError("Insufficient Balance ❌");
      return;
    }

    setError("");

    try {
      await fetch("https://zenova-bank-backend.onrender.com/api/transfers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("Transfer Successful ✅");

      setData({
        accountNumber: "",
        transferType: "",
        amount: "",
        date: "",
        description: ""
      });

      navigate("/transfer-report");

    } catch (error) {
      console.log(error);
      alert("Error while transferring");
    }
  };

  const handleReset = () => {
    setData({
      accountNumber: "",
      transferType: "",
      amount: "",
      date: "",
      description: ""
    });
    setError("");
  };

  return (
    <div className="transaction-page">

      <div className="page-title">
        Transfer Entry Form
      </div>

      <div className="sub-heading">
        Account Transfer : Entry Form
      </div>

      <div className="form-container">

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Account Number :</label>
            <input
              type="text"
              name="accountNumber"
              value={data.accountNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Transfer Type :</label>
            <select
              name="transferType"
              value={data.transferType}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option>NEFT</option>
              <option>RTGS</option>
              <option>IMPS</option>
            </select>
          </div>

          <div className="form-group">
            <label>Amount :</label>
            <input
              type="number"
              name="amount"
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

export default TransferForm;