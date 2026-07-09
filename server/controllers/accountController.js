const Account = require("../models/Account");

// Add Account
exports.addAccount = async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).json({
      success: true,
      message: "Account Added Successfully",
      account,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Accounts
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Account By ID
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Account
exports.updateAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Account Updated Successfully",
      account,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Account
exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Account Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};