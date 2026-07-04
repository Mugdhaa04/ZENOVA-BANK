import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TransferReport.css";

function TransferReport() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const acc = location.state;

  useEffect(() => {
    fetch("http://localhost:3001/transfers")
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res)) {
          setData(res);
        } else {
          setData([]);
        }
      });
  }, []);

  const filtered = data.filter(item =>
    (item?.beneficiary || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="transfer-page">

      {/* TITLE */}
      <div className="transfer-title">
        Transfer Report of Account Number : {acc?.id}
      </div>

      <div className="report-container">

        {/* SEARCH */}
        <div className="search-box">
          <label>Search :</label>
          <input
            type="text"
            placeholder="Search Transfer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
          <button onClick={() => setSearch("")}>Reset</button>
        </div>

        {/* TABLE */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Beneficiary Name</th>
              <th>Contact No</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>IFSC Code</th>
              <th>Account Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.date}</td>
                <td>{t.amount}</td>
                <td>{t.beneficiary}</td>
                <td>{t.contact}</td>
                <td>{t.bank}</td>
                <td>{t.accountNumber}</td>
                <td>{t.ifsc}</td>
                <td>{t.type}</td>

                <td>
                  <button
                    className="icon-btn view"
                    onClick={() =>
                      navigate("/transfer-details", { state: t })
                    }
                  >
                    👁
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PRINT BUTTON */}
        <div className="bottom-bar">
          <button className="print-btn" onClick={() => window.print()}>
            Print Page
          </button>
        </div>

      </div>
    </div>
  );
}

export default TransferReport;