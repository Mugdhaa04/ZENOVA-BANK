import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TransactionDetails.css";

function TransactionDetails() {

  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/transactions/${id}`)
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

        <div className="header-box">
          <h2>Transaction Details</h2>
        </div>

        <div className="details-content">

          <h3 className="sub-title">
            Transaction Details :
            <span> Transaction ID {transaction._id}</span>
          </h3>

          <hr />

          <div className="table-wrapper">

            <table className="details-table">

              <tbody>

                <tr>
                  <th>Account Number</th>
                  <td>{transaction.accountNumber}</td>
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
                  <th>Transfer Method</th>
                  <td>{transaction.transferMethod}</td>
                </tr>

                <tr>
                  <th>Date</th>
                  <td>{transaction.date}</td>
                </tr>

                <tr>
                  <th>Description</th>
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