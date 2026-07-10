import React, { useEffect, useState } from "react";
import "./TransactionReport.css";

function KycReport() {
  const [kycData, setKycData] = useState([]);

  useEffect(() => {
    fetch("https://zenova-bank-backend.onrender.com/api/kyc")
      .then((res) => res.json())
      .then((data) => setKycData(Array.isArray(data) ? data : []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="transaction-page">
      {/* TITLE */}
      <h2 className="title">
        KYC Report of Account Number : 7
      </h2>

      {/* ACCOUNT DETAILS */}
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

      {/* CUSTOMER DETAILS */}
      <div className="box">
        <h3>Details of Customer</h3>

        <div className="account-row">
          <span>Name :</span>
          <b>Mugdha Shinde</b>

          <span>Date of Birth :</span>
          <b>05-08-2003</b>
        </div>

        <div className="account-row">
          <span>Address :</span>
          <b>Baramati</b>

          <span>City :</span>
          <b>Baramati</b>
        </div>

        <div className="account-row">
          <span>State :</span>
          <b>Maharashtra</b>

          <span>Country :</span>
          <b>India</b>
        </div>

        <div className="account-row">
          <span>Mobile :</span>
          <b>9359749993</b>

          <span>Email :</span>
          <b>mugdhashinde27@gmail.com</b>
        </div>
      </div>

      {/* CUSTOMER KYC DETAILS */}
      <div className="box">
        <h3>Customer KYC Details</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>KYC ID</th>
                <th>Document Type</th>
                <th>ID Number</th>
                <th>Image</th>
              </tr>
            </thead>

            <tbody>
              {kycData.length > 0 ? (
                kycData.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.documentType}</td>
                    <td>{item.documentNumber}</td>
                    <td>
                      <img
                        src={item.idProof}
                        alt="doc"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default KycReport;