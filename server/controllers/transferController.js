const Transfer = require("../models/Transfer");

// Add Transfer
exports.addTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.create(req.body);
    res.status(201).json({
      success: true,
      message: "Transfer Added Successfully",
      transfer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Transfers
exports.getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find();
    res.status(200).json(transfers);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Transfer By ID
exports.getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findById(req.params.id);
    res.status(200).json(transfer);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Transfer
exports.updateTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Transfer Updated Successfully",
      transfer,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Transfer
exports.deleteTransfer = async (req, res) => {
  try {
    await Transfer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Transfer Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};