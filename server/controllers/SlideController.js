const Slide = require("../models/Slide");

// Add Slide
exports.addSlide = async (req, res) => {
  try {
    const slide = await Slide.create(req.body);

    res.status(201).json({
      success: true,
      message: "Slide Added Successfully",
      slide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Slides
exports.getSlides = async (req, res) => {
  try {
    const slides = await Slide.find();

    res.status(200).json(slides);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Slide By ID
exports.getSlideById = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);

    res.status(200).json(slide);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Slide
exports.updateSlide = async (req, res) => {
  try {
    const slide = await Slide.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Slide Updated Successfully",
      slide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Slide
exports.deleteSlide = async (req, res) => {
  try {
    await Slide.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Slide Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};