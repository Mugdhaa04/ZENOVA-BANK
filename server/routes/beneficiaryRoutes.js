const express = require("express");
const router = express.Router();

const {
  addBeneficiary,
  getBeneficiaries,
  getBeneficiaryById,
  updateBeneficiary,
  deleteBeneficiary
} = require("../controllers/beneficiaryController");

router.post("/add", addBeneficiary);
router.get("/", getBeneficiaries);
router.get("/:id", getBeneficiaryById);
router.put("/update/:id", updateBeneficiary);
router.delete("/delete/:id", deleteBeneficiary);

module.exports = router;