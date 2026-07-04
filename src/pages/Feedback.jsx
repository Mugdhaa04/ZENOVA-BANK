import React, { useState } from "react";
import "./Feedback.css";
import axios from "axios";

function Feedback() {

const [form,setForm]=useState({
name:"",
email:"",
rating:"",
message:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
e.preventDefault()

await axios.post("http://localhost:3001/feedback",form)

alert("Feedback Submitted Successfully")

setForm({
name:"",
email:"",
rating:"",
message:""
})
}

const handleReset=()=>{
setForm({
name:"",
email:"",
rating:"",
message:""
})
}

return(

<div className="feedback-page">

<div className="feedback-title">
<h2>Feedback Form</h2>
</div>

<div className="feedback-container">

<h3>Write Your Feedback</h3>

<form onSubmit={handleSubmit}>

<div style={{display:"flex",alignItems:"center",marginBottom:"15px"}}>
<label style={{width:"180px",fontWeight:"bold"}}>Full Name :</label>
<input type="text" name="name" value={form.name} onChange={handleChange} style={{flex:1,padding:"8px"}}/>
</div>

<div style={{display:"flex",alignItems:"center",marginBottom:"15px"}}>
<label style={{width:"180px",fontWeight:"bold"}}>Email ID :</label>
<input type="email" name="email" value={form.email} onChange={handleChange} style={{flex:1,padding:"8px"}}/>
</div>

<div style={{display:"flex",alignItems:"center",marginBottom:"15px"}}>
<label style={{width:"180px",fontWeight:"bold"}}>Select Rating :</label>
<select name="rating" value={form.rating} onChange={handleChange} style={{flex:1,padding:"8px"}}>
<option>Select Rating</option>
<option>Excellent</option>
<option>Good</option>
<option>Average</option>
<option>Poor</option>
</select>
</div>

<div style={{display:"flex",alignItems:"flex-start",marginBottom:"15px"}}>
<label style={{width:"180px",fontWeight:"bold"}}>Write Your Feedback :</label>
<textarea name="message" value={form.message} onChange={handleChange} style={{flex:1,padding:"8px",height:"80px"}}></textarea>
</div>

<div className="btn-group">
<button type="submit">Submit</button>
<button type="button" onClick={handleReset}>Reset</button>
</div>

</form>

</div>

</div>

)

}

export default Feedback