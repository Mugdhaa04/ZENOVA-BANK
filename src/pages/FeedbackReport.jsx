import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedbackReport.css";

function FeedbackReport() {

  const [feedbackData, setFeedbackData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/feedback")
      .then(res => res.json())
      .then(data => setFeedbackData(Array.isArray(data) ? data : []))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/feedback/${id}`, {
      method: "DELETE"
    }).then(() => {
      setFeedbackData(feedbackData.filter(item => item._id !== id));
    });
  };

  return (
    <div className="feedback-page">

      <div className="main-title">
        All Feedback Report
      </div>

      <div className="box">

        <h3>Feedback Records</h3>

        <div className="table-wrapper">

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
                  <tr key={item._id}>

                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>{item.message}</td>

                    <td>
                      <button
                        className="view"
                        onClick={() => navigate("/feedback", { state: item })}
                      >
                        👁
                      </button>

                      <button
                        className="delete"
                        onClick={() => handleDelete(item._id)}
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

    </div>
  );
}

export default FeedbackReport;