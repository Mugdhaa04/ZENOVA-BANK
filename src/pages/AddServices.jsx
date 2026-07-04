import React, { useState } from "react";
import "./AddServices.css";

function AddServices() {

const [categoryName, setCategoryName] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState(null);

const handleSubmit = (e) => {
e.preventDefault();

const data = {
  name: categoryName,
  description: description,
 image: image ? `/images/${image.name}` : getIcon()
}; 

fetch("http://localhost:3001/services", {  
  method: "POST",  
  headers: {  
    "Content-Type": "application/json"  
  },  
  body: JSON.stringify(data)  
})  
.then((res) => res.json())  
.then((result) => {  
  console.log("Service Added:", result);  

  setCategoryName("");  
  setDescription("");  
  setImage(null);

  e.target.reset();
});  

};

const handleReset = () => {
setCategoryName("");
setDescription("");
setImage(null);
};

const getIcon = () => {

const name = categoryName.toLowerCase();

if(name.includes("personal")) return "/images/personal.png";

if(name.includes("vehicle")) return "/images/vehicle.png";

if(name.includes("home")) return "/images/home.png";

if(name.includes("business")) return "/images/business.png";

if(name.includes("gold")) return "/images/gold.png";

if(name.includes("savings")) return "/images/savings.png";

if(name.includes("fixed")) return "/images/fixed.png";

if(name.includes("internet")) return "/images/internet.png";

if(name.includes("customer")) return "/images/customer.png";

if(name.includes("credit")) return "/images/credit.png";

if(name.includes("currency")) return "/images/currency.png";

if(name.includes("atm")) return "/images/atm.png";

return "/images/bank.png";

};

return (
<div className="services-page">

<h2 className="page-heading">Services Registration</h2>  

<div className="form-container">  

<h3>Banking Service Entry Form</h3>  
<hr />

<div className="form-flex">

<form onSubmit={handleSubmit}>  

<div className="form-row">  
<label>Enter Category Name:</label>  
<input  
type="text"  
value={categoryName}  
onChange={(e) => setCategoryName(e.target.value)}
placeholder="Enter Category Name"  
/>  
</div>  

<div className="form-row">  
<label>Category Image:</label>  
<input  
type="file"  
onChange={(e) => setImage(e.target.files[0])}  
/>  
</div>  

<div className="form-row">  
<label>Description:</label>  
<textarea  
value={description}  
onChange={(e) => setDescription(e.target.value)}  
placeholder="Enter Full Description"  
></textarea>  
</div>  

<div className="btn-group">  
<button type="submit" className="submit-btn">Submit</button>  
<button type="button" onClick={handleReset} className="reset-btn">Reset</button>  
</div>  

</form>

<div className="service-icon">
{image ? (
<img src={URL.createObjectURL(image)} alt="icon"/>
) : (
<img src={getIcon()} alt="icon"/>
)}
</div>

</div>

</div>  

</div>
);
}

export default AddServices;