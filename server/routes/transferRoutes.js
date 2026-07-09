const express = require("express");
const router = express.Router();

const {
  addTransfer,
  getTransfers,
  getTransferById,
  updateTransfer,
  deleteTransfer
} = require("../controllers/transferController");

router.post("/add", addTransfer);
router.get("/", getTransfers);
router.get("/:id", getTransferById);
router.put("/update/:id", updateTransfer);
router.delete("/delete/:id", deleteTransfer);

module.exports = router;