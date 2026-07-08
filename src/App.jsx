import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Billpay from "./pages/Billpay";
import RemoteDeposits from "./pages/RemoteDeposits";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

import AdminNavbar from "./pages/AdminNavbar";
import UserNavbar from "./pages/UserNavbar";

import AddServices from "./pages/AddServices";
import ServiceDetails from "./pages/ServiceDetails";

import Feedback from "./pages/Feedback";

import AddTransaction from "./pages/AddTransaction";
import AddUser from "./pages/AddUser";
import AddKYC from "./pages/AddKYC";
import AddAccount from "./pages/AddAccount";

import ServiceReport from "./pages/ServiceReport";
import CustomerReport from "./pages/CustomerReport";
import KycReport from "./pages/KycReport";
import AccountReport from "./pages/AccountReport";

import TransferReport from "./pages/TransferReport";
import TransferDetails from "./pages/TransferDetails";

import TransactionReport from "./pages/TransactionReport";
import TransactionDetails from "./pages/TransactionDetails";

import FeedbackReport from "./pages/FeedbackReport";
import AdminReport from "./pages/AdminReport";

import AddBeneficiary from "./pages/AddBeneficiary";
import TransferForm from "./pages/TransferForm";
import DepositWithdraw from "./pages/DepositWithdraw";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
            </>
          }
        />

        <Route
          path="/service/:name"
          element={
            <>
              <Navbar />
              <ServiceDetails />
            </>
          }
        />

        <Route
          path="/billpay"
          element={
            <>
              <Navbar />
              <Billpay />
            </>
          }
        />

        <Route
          path="/remote-deposits"
          element={
            <>
              <Navbar />
              <RemoteDeposits />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />

        {/* ADMIN */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <>
                <AdminNavbar />
                <AdminDashboard />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-services"
          element={
            <>
              <AdminNavbar />
              <AddServices />
            </>
          }
        />

        <Route
          path="/add-services/:id"
          element={
            <>
              <AdminNavbar />
              <AddServices />
            </>
          }
        />

        <Route
          path="/add-transaction"
          element={
            <>
              <AdminNavbar />
              <AddTransaction />
            </>
          }
        />

        <Route
          path="/add-user"
          element={
            <>
              <AdminNavbar />
              <AddUser />
            </>
          }
        />

        <Route
          path="/add-user/:id"
          element={
            <>
              <AdminNavbar />
              <AddUser />
            </>
          }
        />

        <Route
          path="/add-kyc"
          element={
            <>
              <AdminNavbar />
              <AddKYC />
            </>
          }
        />

        <Route
          path="/add-account"
          element={
            <>
              <AdminNavbar />
              <AddAccount />
            </>
          }
        />

        <Route
          path="/service-report"
          element={
            <>
              <AdminNavbar />
              <ServiceReport />
            </>
          }
        />

        <Route
          path="/customer-report"
          element={
            <>
              <AdminNavbar />
              <CustomerReport />
            </>
          }
        />

        <Route
          path="/transaction-report"
          element={
            <>
              <AdminNavbar />
              <TransactionReport />
            </>
          }
        />

        <Route
          path="/transaction-details/:id"
          element={
            <>
              <AdminNavbar />
              <TransactionDetails />
            </>
          }
        />

        <Route
          path="/kyc-report"
          element={
            <>
              <AdminNavbar />
              <KycReport />
            </>
          }
        />

        <Route
          path="/account-report"
          element={
            <>
              <AdminNavbar />
              <AccountReport />
            </>
          }
        />

        <Route
          path="/transfer-report"
          element={
            <>
              <AdminNavbar />
              <TransferReport />
            </>
          }
        />

        <Route
          path="/transfer-details"
          element={
            <>
              <AdminNavbar />
              <TransferDetails />
            </>
          }
        />

        <Route
          path="/admin-report"
          element={
            <>
              <AdminNavbar />
              <AdminReport />
            </>
          }
        />

        <Route
          path="/feedback-report"
          element={
            <>
              <AdminNavbar />
              <FeedbackReport />
            </>
          }
        />

        {/* USER */}

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/beneficiary"
          element={
            <>
              <UserNavbar />
              <AddBeneficiary />
            </>
          }
        />

        <Route
          path="/transfer"
          element={
            <>
              <UserNavbar />
              <TransferForm />
            </>
          }
        />

        <Route
          path="/depositwithdraw"
          element={
            <>
              <UserNavbar />
              <DepositWithdraw />
            </>
          }
        />

        <Route
          path="/feedback"
          element={
            <>
              <UserNavbar />
              <Feedback />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;