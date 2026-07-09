const Kyc = require("../models/Kyc");

// Add KYC
exports.addKyc = async (req, res) => {
  try {
    const kyc = await Kyc.create(req.body);
    res.status(201).json({
      success: true,
      message: "KYC Added Successfully",
      kyc,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All KYC
exports.getKycs = async (req, res) => {
  try {
    const kycs = await Kyc.find();
    res.status(200).json(kycs);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get KYC By ID
exports.getKycById = async (req, res) => {
  try {
    const kyc = await Kyc.findById(req.params.id);
    res.status(200).json(kyc);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update KYC
exports.updateKyc = async (req, res) => {
  try {
    const kyc = await Kyc.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "KYC Updated Successfully",
      kyc,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete KYC
exports.deleteKyc = async (req, res) => {
  try {
    await Kyc.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "KYC Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};