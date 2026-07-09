const express = require("express");
const router = express.Router();

const {
  addSlide,
  getSlides,
  getSlideById,
  updateSlide,
  deleteSlide
} = require("../controllers/slideController");

router.post("/add", addSlide);
router.get("/", getSlides);
router.get("/:id", getSlideById);
router.put("/update/:id", updateSlide);
router.delete("/delete/:id", deleteSlide);

module.exports = router;