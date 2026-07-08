import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionReport.css";

function TransactionReport() {

  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const [openingBalance, setOpeningBalance] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/transactions")
      .then(res => res.json())
      .then(data => setTransactions(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/users/7")
      .then(res => res.json())
      .then(user => setOpeningBalance(Number(user.balance || 0)))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/transactions/${id}`, {
      method: "DELETE"
    }).then(() => {
      setTransactions(transactions.filter(item => item.id !== id));
    });
  };

  const filteredData = transactions.filter((item) => {
    const searchText = finalSearch.toLowerCase();

    return (
      item.transactionType?.toLowerCase().includes(searchText) ||
      item.transferMethod?.toLowerCase().includes(searchText) ||
      item.date?.toLowerCase().includes(searchText) ||
      item.amount?.toString().includes(searchText)
    );
  });

  const totalCredit = transactions
    .filter(item => item.transactionType?.toLowerCase().includes("deposit"))
    .reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  const totalDebit = transactions
    .filter(item => item.transactionType?.toLowerCase().includes("withdraw"))
    .reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

  const balance = openingBalance + totalCredit - totalDebit;

  return (
    <div className="transaction-page">

      <h2 className="title">
        Transaction Report of Account Number : 7
      </h2>

      <div className="box">

        <h3>Details of Account Number 7</h3>

        <div className="account-wrapper">

          <div className="account-left">

            <div className="account-row">
              <span>Account No :</span>
              <b>7</b>

              <span>Account Type :</span>
              <b>Savings Account</b>
            </div>

            <div className="account-row">
              <span>Opening Date :</span>
              <b>12-01-2023</b>

              <span>Branch :</span>
              <b>State Bank of India</b>
            </div>

            <div className="account-row">
              <span>Nominee Name :</span>
              <b>Suman Jaiswal</b>

              <span>Nominee Mobile :</span>
              <b>9876543210</b>
            </div>

            <div className="account-row">
              <span>Nominee Address :</span>
              <b>Allahabad</b>

              <span>Nominee ID :</span>
              <b>1234</b>
            </div>

          </div>

          <div className="profile-box">
            <img src="/images/user.png" alt="profile" />
          </div>

        </div>

      </div>

      <div className="box">

        <h3>Details of Customer</h3>

        <div className="account-row">
          <span>Name :</span>
          <b>Amit Kumar</b>

          <span>Date of Birth :</span>
          <b>1995-10-10</b>
        </div>

        <div className="account-row">
          <span>Address :</span>
          <b>ABC</b>

          <span>City :</span>
          <b>Kanpur</b>
        </div>

        <div className="account-row">
          <span>State :</span>
          <b>UP</b>

          <span>Country :</span>
          <b>India</b>
        </div>

        <div className="account-row">
          <span>Mobile :</span>
          <b>9876543210</b>

          <span>Email :</span>
          <b>amit@gmail.com</b>
        </div>

      </div>
      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Transaction"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setFinalSearch(search)}>
          Search
        </button>

        <button
          onClick={() => {
            setSearch("");
            setFinalSearch("");
          }}
        >
          Reset
        </button>
      </div>

      {/* ADD BUTTON */}
      <div style={{ margin: "10px 0" }}>
        <button
          className="add-btn"
          onClick={() => navigate("/add-transaction")}
        >
          Add New Transaction
        </button>
      </div>

      {/* SUMMARY */}
      <div className="summary-bar">

        <div className="summary-item">
          <span>Available Balance</span>
          <b>{balance.toFixed(2)}</b>
        </div>

        <div className="summary-item">
          <span>Total Credited Amount</span>
          <b>{totalCredit.toFixed(2)}</b>
        </div>

        <div className="summary-item">
          <span>Total Debited Amount</span>
          <b>{totalDebit.toFixed(2)}</b>
        </div>

      </div>

      {/* TABLE */}
      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredData.map((item) => (
              <tr key={item.id}>

                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.transactionType}</td>
                <td>{item.transferMethod}</td>

                <td>

                  <button
                    onClick={() =>
                      navigate(`/transaction-details/${item.id}`)
                    }
                  >
                    👁
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/edit-transaction/${item.id}`)
                    }
                  >
                    ✏️
                  </button>

                  <button
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

export default TransactionReport;