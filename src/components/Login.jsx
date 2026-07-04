import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const cleanEmail = email.trim().toLowerCase();

  if (cleanEmail === "admin123@gmail.com") {
    localStorage.setItem("role", "admin");
    navigate("/admin-dashboard");
  } else if (cleanEmail === "user@gmail.com" || cleanEmail === "mugdha@gmail.com") {
    localStorage.setItem("role", "customer");
    navigate("/user-dashboard");
  } else {
    alert("Invalid Email");
  }
};

  return (
    <div className="login-page">
      <h1 className="login-title">User Login</h1>

      <div className="login-form-container">
        <h3>Login to Your Account</h3>
        <hr />

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="text" 
              placeholder="Enter email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
