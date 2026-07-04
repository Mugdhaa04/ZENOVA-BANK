import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

function ServiceDetails() {

const { name } = useParams();

const services = {

personal:{
title:"Personal Loan",
desc:"A personal loan helps individuals meet their financial needs such as medical expenses, education fees, travel expenses, or any emergency. The loan does not require any collateral and is approved based on income and credit score.",
img:"/images/personal.png"
},

vehicle:{
title:"Vehicle Loan",
desc:"A vehicle loan helps customers purchase a new or used car or bike. The bank provides financial assistance and the borrower repays the loan amount through monthly EMIs over a fixed tenure.",
img:"/images/vehicle.png"
},

home:{
title:"Home Loan",
desc:"A home loan is borrowed from a bank or financial institution to buy, construct, or renovate a house. The loan is repaid over a long period through EMIs. Interest rates and tenure depend on the bank policies.",
img:"/images/home.png"
},

business:{
title:"Business Loan",
desc:"Business loans are provided to entrepreneurs to expand their businesses, purchase machinery, manage working capital, or start new ventures. These loans help businesses grow and improve productivity.",
img:"/images/business.png"
},

gold:{
title:"Gold Loan",
desc:"Gold loan allows customers to pledge their gold ornaments as security and receive instant funds from the bank. The loan amount depends on the purity and weight of the gold pledged.",
img:"/images/gold.png"
},

saving:{
title:"Saving Account",
desc:"A savings account allows customers to deposit money safely while earning interest. It provides easy access to funds through ATM, internet banking, and mobile banking services.",
img:"/images/saving.png"
},

fd:{
title:"Fixed Deposit",
desc:"A fixed deposit allows customers to invest money for a fixed period at a higher interest rate than savings accounts. It is a safe investment option offered by banks.",
img:"/images/fd.png"
},

internet:{
title:"Internet Banking",
desc:"Internet banking allows customers to perform banking transactions online such as fund transfer, bill payments, balance checking, and account statements without visiting the bank.",
img:"/images/internet.png"
},

customer:{
title:"Customer Support",
desc:"Customer support services help customers resolve banking issues, get information about products, and receive assistance related to accounts, loans, or digital banking services.",
img:"/images/customer.png"
},

credit:{
title:"Credit Card",
desc:"Credit cards allow customers to make purchases on credit and repay the amount later. They provide convenience, reward points, and financial flexibility for everyday expenses.",
img:"/images/credit.png"
},

currency:{
title:"Currency Exchange",
desc:"Currency exchange services allow customers to convert one currency into another. These services are useful for travelers, businesses involved in international trade, and foreign transactions.",
img:"/images/currency.png"
},

atm:{
title:"ATM Services",
desc:"ATM services allow customers to withdraw cash, check account balance, transfer money, and perform basic banking transactions anytime without visiting the bank branch.",
img:"/images/atm.png"
}

};

const service = services[name];

return (

<div className="details-container">

<h3 className="details-title">
Details of Service : {service?.title}
</h3>

<div className="details-box">

<table>

<tr>
<td className="label">Name</td>
<td>{service?.title}</td>
</tr>

<tr>
<td className="label">Description</td>
<td>{service?.desc}</td>
</tr>

</table>

<div className="details-icon">
<img src={service?.img} alt="service"/>
</div>

</div>

</div>

);

}

export default ServiceDetails;