import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

/* Components */
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

/* <Bootstrap*/


/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

import Billpay from "./pages/Billpay";
import RemoteDeposits from "./pages/RemoteDeposits";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import AdminNavbar from "./pages/AdminNavbar";
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
import UserNavbar from "./pages/UserNavbar";
import TransferForm from "./pages/TransferForm";
import DepositWithdraw from "./pages/DepositWithdraw";




function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
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
          path="/transfer"
          element={
            <>
              <Navbar />
              <TransferForm />
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

        {/* Login */}
        <Route
  path="/login"
  element={
    <>
      <Navbar />
      <Login />
    </>
  }
/>

        {/* Admin Dashboard */}
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

        {/* Customer Dashboard */}
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

       {/*ADD SERVICES*/}
        <Route
  path="/add-services"
  element={
    <ProtectedRoute>
      <>
        <AdminNavbar />
        <AddServices />
      </>
    </ProtectedRoute>
  }
/>

{/* SERVICE DETAILS */}
<Route
  path="/service/:name"
  element={
    <>
      <Navbar />
      <ServiceDetails />
    </>
  }
/>

{/* Feedback Page */}
<Route
  path="/feedback"
  element={
    <>
      <Navbar />
      <Feedback />
    </>
  }
/>

{/* Add Transaction Page */}
<Route
  path="/add-transaction"
  element={
    <>
      <Navbar />
      <AddTransaction />
    </>
  }
/>

{/* Add user page*/}
<Route
  path="/add-user"
  element={
    <>
      <Navbar />
      <AddUser />
    </>
  }
/>

<Route
  path="/add-user/:id"
  element={
    <>
      <Navbar />
      <AddUser />
    </>
  }
/>

{/* add kyc*/}
<Route
  path="/add-kyc"
  element={
    <ProtectedRoute>
      <>
        <AdminNavbar />
        <AddKYC />
      </>
    </ProtectedRoute>
  }
/>
{/* add account*/}
<Route
  path="/add-account"
  element={
    <ProtectedRoute>
      <>
        <AdminNavbar />
        <AddAccount />
      </>
    </ProtectedRoute>
  }
/>

 <Route
          path="/service-report"
          element={
            <>
              <Navbar />
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
  path="/add-services/:id"
  element={
    <>
      <AdminNavbar />
      <AddServices />
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
  path="/Account-report"
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
  path="/Transfer-details"
  element={
    <>
      <AdminNavbar />
      <TransferDetails />
    </>
  }
/>

<Route
  path="/Transaction-report"
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

 {/* beneficiary */}
        <Route
          path="/beneficiary"
          element={
            <ProtectedRoute>
              <UserNavbar/>
              <AddBeneficiary />
            </ProtectedRoute>
          }
        />

         {/* DepositWithdraw */}
        <Route
          path="/depositwithdraw"
          element={
            <ProtectedRoute>
              <UserNavbar/>
              <DepositWithdraw />
            </ProtectedRoute>
          }
        />



          


       
      </Routes>
    </BrowserRouter>
  );
}

export default App;