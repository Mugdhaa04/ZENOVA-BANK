import React, { useState } from "react";
import Slider from "react-slick";
import "./Home.css";

function Home() {

  const [activeIndex, setActiveIndex] = useState(null);

  const mainSlider = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const services = [
    { title: "Personal Loan", img: "personal.png", info: "Instant personal loan approval with minimum documents." },
    { title: "Vehicle Loan", img: "vehicle.png", info: "Low interest vehicle loan facility." },
    { title: "Home Loan", img: "home.png", info: "Affordable home loan with flexible tenure." },
    { title: "Business Loan", img: "business.png", info: "Grow your business with secure funding." },
    { title: "Gold Loan", img: "gold.png", info: "Quick gold loan service available." },
    { title: "Saving Accounts", img: "saving.png", info: "Open savings account easily." },
    { title: "Fixed Deposit", img: "fixed.png", info: "High return fixed deposit plans." },
    { title: "Internet Banking", img: "internet.png", info: "24/7 online banking services." },
    { title: "Customer Care", img: "customer.png", info: "Support available anytime." },
    { title: "Credit Cards", img: "credit.png", info: "Premium credit cards with rewards." },
    { title: "Currency Exchange", img: "currency.png", info: "Secure foreign currency exchange." },
    { title: "ATM Service", img: "atm.png", info: "Wide ATM network access." }
  ];

  const firstRow = services.slice(0, 6);
  const secondRow = services.slice(6, 12);

  return (
    <div className="home-container">

      {/* SLIDER */}
      <Slider {...mainSlider}>
        <div>
          <img src="/images/banner.jpg" className="slider-img" alt="" />
        </div>
        <div>
          <img src="/images/slider2.jpg" className="slider-img" alt="" />
        </div>
      </Slider>

      {/* MAIN TEXT */}
      <div className="main-text">
        <h2 className="section-heading">
          Online Banking System - One stop solution for all banking needs
        </h2>
        <p>
          Online banking allows customers to conduct financial transactions through the Internet. 
          It is also known as internet banking or web banking. Online banking offers customers 
          almost every service traditionally available through a local branch including deposits, 
          transfers, and online bill payments. With online banking, customers are not required to 
          visit a bank branch to complete most of their basic banking transactions. 

          Customers can check account balances, transfer funds between accounts, apply for loans, 
          request cheque books, pay utility bills and manage credit cards anytime and anywhere. 
          Online banking provides secure access with advanced authentication systems to ensure 
          safety of financial data. It saves time, reduces paperwork and provides a seamless 
          digital banking experience 24/7.
        </p>
      </div>

      {/* SECOND TEXT */}
      <div className="second-text">
        <h3 className="section-heading">
          Our Banking Services
        </h3>
        <p>
          Online only banks may not provide direct ATM access but will make provisions for 
          customers to use ATMs at other banks and retail stores. They may reimburse you 
          for some of the ATM fees charged by other financial institutions. Reduced overhead 
          costs associated with not having physical branches typically allow online banks 
          to offer significant savings on banking fees. They also offer higher interest rates 
          on savings accounts and provide faster digital services with instant notifications 
          and secure transaction tracking.
        </p>
      </div>

      {/* SERVICES */}
      <div className="services-wrapper">

        {/* FIRST ROW */}
        <div className="services-track fast">
          {[...firstRow, ...firstRow].map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="service-circle">
                <img src={`/images/${service.img}`} alt="" />
              </div>
              <p>{service.title}</p>

              {activeIndex === index && (
                <div className="service-info">
                  {service.info}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SECOND ROW (Reverse Direction) */}
        <div className="services-track reverse">
          {[...secondRow, ...secondRow].map((service, index) => (
            <div
              key={index + 100}
              className="service-card"
              onClick={() =>
                setActiveIndex(activeIndex === index + 100 ? null : index + 100)
              }
            >
              <div className="service-circle">
                <img src={`/images/${service.img}`} alt="" />
              </div>
              <p>{service.title}</p>

              {activeIndex === index + 100 && (
                <div className="service-info">
                  {service.info}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ABOUT */}
      <div className="about-section">
        <div className="about-left">
          <img src="/images/about.png" alt="" />
        </div>

        <div className="about-text">
          <h2>About Online Banking System</h2>
        <p>
  Online banking allows customers to conduct financial transactions via the internet 
  without visiting a physical branch. It provides access to essential banking services 
  such as deposits, fund transfers, bill payments, account management and loan applications 
  from anywhere at any time. Customers can securely monitor their accounts, track transactions 
  and manage financial activities with just a few clicks.
</p>

<p>
  Our Online Banking System is designed to offer maximum security, speed and convenience. 
  With advanced encryption technology and a user-friendly interface, customers can perform 
  transactions confidently and efficiently. 
</p>
        </div>
      </div>

    </div>
  );
}

export default Home;