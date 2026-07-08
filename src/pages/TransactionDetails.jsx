import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TransactionDetails.css";

function TransactionDetails() {

  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransaction(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!transaction) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="details-page">

      <div className="details-container">

        {/* HEADER */}
        <div className="header-box">
          <h2>Transaction Details</h2>
        </div>

        {/* BODY */}
        <div className="details-content">

          <h3 className="sub-title">
            Transaction Details :
            <span> Transaction ID {transaction.id}</span>
          </h3>

          <hr />

          <div className="table-wrapper">

            <table className="details-table">

              <tbody>

                <tr>
                  <th>Account ID</th>
                  <td>{transaction.accountNumber || 7}</td>
                </tr>

                <tr>
                  <th>Amount</th>
                  <td>{transaction.amount}</td>
                </tr>

                <tr>
                  <th>Transaction Type</th>
                  <td>{transaction.transactionType}</td>
                </tr>
                <tr>
                  <th>Transaction Method</th>
                  <td>{transaction.transferMethod}</td>
                </tr>

                <tr>
                  <th>Transaction Date</th>
                  <td>{transaction.date}</td>
                </tr>

                <tr>
                  <th>Transaction Description</th>
                  <td>{transaction.description || "-"}</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TransactionDetails;