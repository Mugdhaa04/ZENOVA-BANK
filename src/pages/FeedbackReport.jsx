import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionReport.css";

function FeedbackReport() {

  const [feedbackData, setFeedbackData] = useState([]);
  const navigate = useNavigate();

  // ✅ FETCH DATA
  useEffect(() => {
    fetch("http://localhost:3001/feedback")
      .then(res => res.json())
      .then(data => setFeedbackData(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  // ✅ DELETE
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/feedback/${id}`, {
      method: "DELETE"
    }).then(() => {
      setFeedbackData(feedbackData.filter(item => item.id !== id));
    });
  };

  return (
    <div className="transaction-page">

      {/* 🔥 HEADING OUTSIDE BOX */}
      <h2 className="title">All Feedback Report</h2>

      {/* BOX */}
      <div className="box">

        <h3>Feedback Records</h3>

        {/* TABLE */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {feedbackData.length > 0 ? (
              feedbackData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.rating}</td>
                  <td>{item.message}</td>

                  <td>
                    {/* ✅ VIEW → OPEN FEEDBACK PAGE */}
                    <button
                      className="view"
                      onClick={() => navigate("/feedback", { state: item })}
                    >
                      👁
                    </button>

                    {/* DELETE */}
                    <button
                      className="delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default FeedbackReport;