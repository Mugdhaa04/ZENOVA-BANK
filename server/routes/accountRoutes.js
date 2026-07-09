const express = require("express");
const router = express.Router();

const {
  addAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount
} = require("../controllers/accountController");

router.post("/add", addAccount);
router.get("/", getAccounts);
router.get("/:id", getAccountById);
router.put("/update/:id", updateAccount);
router.delete("/delete/:id", deleteAccount);

module.exports = router;