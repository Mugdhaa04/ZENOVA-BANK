import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TransferDetails.css";

function TransferDetails() {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  return (
    <div>

      {/* HEADER */}
      <div className="top-header">
        Transfer Details
      </div>

      <div className="details-page">
        <div className="details-container">

          {/* SUB TITLE */}
          <div className="sub-title">
            Transfer Details : <span>Transfer ID {data?.id}</span>
          </div>

          {/* 🔥 4 COLUMN TABLE */}
          <div className="details-grid">

            <div className="item">Transfer From Account ID</div>
            <div className="item">{data?.accountNumber}</div>
            <div className="item">Transfer Amount</div>
            <div className="item">{data?.amount}</div>

            <div className="item">Transfer Date</div>
            <div className="item">{data?.date}</div>
            <div className="item">Transfer Description</div>
            <div className="item">---</div>

            <div className="item">Beneficiary Name</div>
            <div className="item">{data?.beneficiary}</div>
            <div className="item">Contact No</div>
            <div className="item">{data?.contact}</div>

            <div className="item">Bank Name</div>
            <div className="item">{data?.bank}</div>
            <div className="item">Account Number</div>
            <div className="item">{data?.accountNumber}</div>

            <div className="item">IFSC Code</div>
            <div className="item">{data?.ifsc}</div>
            <div className="item">Account Type</div>
            <div className="item">{data?.type}</div>

          </div>

          {/* BUTTON RIGHT */}
          <div className="btn-group">
            <button onClick={() => navigate(-1)}>Back</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TransferDetails;