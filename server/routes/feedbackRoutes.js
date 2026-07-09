const express = require("express");
const router = express.Router();

const {
  addFeedback,
  getFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback
} = require("../controllers/feedbackController");

router.post("/add", addFeedback);
router.get("/", getFeedbacks);
router.get("/:id", getFeedbackById);
router.put("/update/:id", updateFeedback);
router.delete("/delete/:id", deleteFeedback);

module.exports = router;