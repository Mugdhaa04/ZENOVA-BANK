const express = require("express");
const router = express.Router();

const {
  addKyc,
  getKycs,
  getKycById,
  updateKyc,
  deleteKyc
} = require("../controllers/kycController");

router.post("/add", addKyc);
router.get("/", getKycs);
router.get("/:id", getKycById);
router.put("/update/:id", updateKyc);
router.delete("/delete/:id", deleteKyc);

module.exports = router;