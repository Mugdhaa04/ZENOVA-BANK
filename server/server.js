const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/accounts", require("./routes/accountRoutes.js"));
app.use("/api/transactions", require("./routes/transactionRoutes.js"));
app.use("/api/transfers", require("./routes/transferRoutes.js"));
app.use("/api/services", require("./routes/serviceRoutes.js"));
app.use("/api/feedback", require("./routes/feedbackRoutes.js"));
app.use("/api/kyc", require("./routes/kycRoutes.js"));
app.use("/api/beneficiaries", require("./routes/beneficiaryRoutes.js"));
app.use("/api/slides", require("./routes/slideRoutes.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});