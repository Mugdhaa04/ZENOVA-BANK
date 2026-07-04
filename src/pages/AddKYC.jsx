import React from "react";
import "./AddKYC.css";

function AddKyc() {
  return (
    <div className="addkyc-page">

      {/* Title Bar */}
      <div className="kyc-header">
        <h2>Customer KYC Registration</h2>
      </div>

      <div className="kyc-container">

        <h4>Customer KYC Entry Form</h4>
        <hr />

        <form>

          <div className="form-row">
            <label>Select Customer :</label>
            <select>
              <option>Select Customer</option>
              <option>Rahul Sharma</option>
              <option>Priya Patil</option>
              <option>Amit Verma</option>
              <option>Sneha Kulkarni</option>
            </select>
          </div>

          <div className="form-row">
            <label>Document Type:</label>
            <input type="text" placeholder="Enter Document Type" />
          </div>

          <div className="form-row">
            <label>ID Number:</label>
            <input type="text" placeholder="Enter ID Number" />
          </div>

          <div className="form-row">
            <label>Upload Image:</label>
            <input type="file" />
          </div>

          <div className="form-row">
            <label>Description:</label>
            <textarea placeholder="Enter Full Description"></textarea>
          </div>

          <div className="btn-row">
            <button className="submit">Submit</button>
            <button className="reset">Reset</button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default AddKyc;