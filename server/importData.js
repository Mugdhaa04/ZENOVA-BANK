const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");

const User = require("./models/User");
const Account = require("./models/Account");
const Transaction = require("./models/Transaction");
const Transfer = require("./models/Transfer");
const Service = require("./models/Service");
const Feedback = require("./models/Feedback");
const Kyc = require("./models/Kyc");
const Beneficiary = require("./models/Beneficiary");
const Slide = require("./models/Slide");

const data = require("../db.json");

const importData = async () => {
  try {
    await connectDB();

    await User.deleteMany();
    await Account.deleteMany();
    await Transaction.deleteMany();
    await Transfer.deleteMany();
    await Service.deleteMany();
    await Feedback.deleteMany();
    await Kyc.deleteMany();
    await Beneficiary.deleteMany();
    await Slide.deleteMany();

    await User.insertMany(data.users);
    await Account.insertMany(data.accounts);
    await Transaction.insertMany(data.transactions);
    await Transfer.insertMany(data.transfers);
    await Service.insertMany(data.services);
    await Feedback.insertMany(data.feedback);
    await Kyc.insertMany(data.kyc);
    await Beneficiary.insertMany(data.beneficiaries);
    await Slide.insertMany(data.slides);

    console.log("✅ Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();