const Beneficiary = require("../models/Beneficiary");

// Add Beneficiary
exports.addBeneficiary = async (req, res) => {
  try {
    const beneficiary = await Beneficiary.create(req.body);

    res.status(201).json({
      success: true,
      message: "Beneficiary Added Successfully",
      beneficiary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Beneficiaries
exports.getBeneficiaries = async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find();

    res.status(200).json(beneficiaries);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Beneficiary By ID
exports.getBeneficiaryById = async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findById(req.params.id);

    res.status(200).json(beneficiary);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Beneficiary
exports.updateBeneficiary = async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Beneficiary Updated Successfully",
      beneficiary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Beneficiary
exports.deleteBeneficiary = async (req, res) => {
  try {
    await Beneficiary.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Beneficiary Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};