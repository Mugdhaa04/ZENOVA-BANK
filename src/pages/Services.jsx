import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services(){

const navigate = useNavigate();

const services = [
{name:"personal", title:"Personal Loan", img:"/images/personal.png"},
{name:"vehicle", title:"Vehicle Loan", img:"/images/vehicle.png"},
{name:"home", title:"Home Loan", img:"/images/home.png"},
{name:"business", title:"Business Loan", img:"/images/business.png"},
{name:"gold", title:"Gold Loan", img:"/images/gold.png"},
{name:"saving", title:"Saving Accounts", img:"/images/saving.png"},
{name:"fd", title:"Fixed Deposit", img:"/images/fixed.png"},
{name:"internet", title:"Internet Banking", img:"/images/internet.png"},
{name:"customer", title:"Customers Care", img:"/images/customer.png"},
{name:"credit", title:"Credit Cards", img:"/images/credit.png"},
{name:"currency", title:"Currency Exchange", img:"/images/currency.png"},
{name:"atm", title:"ATM Service", img:"/images/atm.png"}
];

const [search,setSearch]=useState("");
const [data,setData]=useState(services);

const handleSearch=()=>{
const result = services.filter(service =>
service.title.toLowerCase().includes(search.toLowerCase())
);
setData(result);
};

const handleReset=()=>{
setSearch("");
setData(services);
};

return(

<div className="services-container">

<h2>All Banking Services</h2>

<p className="services-text">
These all are available services. Kindly click on the services to see the details of it.
</p>

<div className="search-box">

<label>Search Services :</label>

<input
type="text"
placeholder="Search Category"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<button onClick={handleSearch}>Search</button>
<button className="reset-btn" onClick={handleReset}>Reset</button>

</div>

<div className="services-grid">

{data.map((service,index)=>(
<div
className="service-card"
key={index}
onClick={()=>navigate(`/service/${service.name}`)}
>

<img src={service.img} alt={service.title}/>
<p>{service.title}</p>

</div>
))}

</div>

</div>

);

}

export default Services;