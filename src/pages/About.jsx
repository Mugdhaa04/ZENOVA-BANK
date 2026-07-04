import "./About.css";
import { FaUniversity, FaUserShield, FaMoneyCheckAlt } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      {/* Top Header */}
      <div className="about-header">
        <h2>About Online Banking System</h2>
      </div>

      <div className="about-container">

        {/* Sub Heading */}
        <h3>About Online Banking System</h3>

        {/* Main Paragraph Section */}
<p>
Online banking allows customers to conduct financial transactions via the internet.
It is also known as internet banking or web banking. Online banking offers almost
every service traditionally available through a local bank branch including deposits,
fund transfers, balance inquiries, transaction history, cheque book requests and
online bill payments. Customers can access their accounts 24/7 using a secure
browser or mobile application without physically visiting a bank branch.

The system provides real-time account updates, instant fund transfers and detailed
transaction monitoring. With advanced digital infrastructure, banking services
have become faster, more efficient and highly accessible for users across different
locations.
</p>

<p>
Virtually every banking institution provides online banking services that can be
accessed through computers, smartphones or tablets. Customers are not required
to visit a physical branch to complete routine financial activities. Whether at
home, at work or while traveling, users can manage their accounts conveniently
and securely.

Online banking platforms use secure authentication mechanisms, encrypted data
transmission and multiple security layers to protect sensitive financial information.
This modern banking solution reduces paperwork, saves time and enhances the
overall customer experience by providing seamless and reliable digital services.
</p>

      

        {/* Lower Section */}
        <div className="about-lower">

          {/* Features Section */}
          <div className="features">

            <div className="feature-item">
              <div className="icon-box">
                <FaUniversity />
              </div>
              <div>
                <h4>ONLINE BANKING SYSTEM</h4>
                <p>
                  Online banking system enables customers to perform financial 
                  transactions securely through the internet. It provides access 
                  to account details, transaction history, fund transfers and 
                  bill payments anytime and anywhere without visiting a branch.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon-box">
                <FaUserShield />
              </div>
              <div>
                <h4>USER REGISTRATION SYSTEM</h4>
                <p>
                  User registration system allows customers to create secure 
                  accounts using authentication and authorization mechanisms. 
                  It protects sensitive data with encrypted credentials and 
                  ensures only authorized users can access banking services safely.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="icon-box">
                <FaMoneyCheckAlt />
              </div>
              <div>
                <h4>ONLINE PAYMENT SYSTEM</h4>
                <p>
                  Online payment system provides fast, secure and seamless 
                  digital transactions. Customers can transfer funds, pay 
                  utility bills and manage financial operations instantly 
                  with high-level security standards.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Image */}
          <div className="about-image">
            <img src="/images/about.png" alt="Online Banking" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;