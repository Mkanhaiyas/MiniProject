import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [btn1Status, setbtn1Status] = useState(false);
  const [btn2Status, setbtn2Status] = useState(true);

  return (
    <section id="login">
      <div className="login">
        <div className="btn-box">
          <div className="void"></div>
          <button
            id="B1"
            onClick={() => {
              setbtn1Status(true);
              setbtn2Status(false);
            }}
            style={{ backgroundColor: btn1Status ? "" : "rgb(79, 28, 182)" }}
            className="Log btn"
          >
            Login
          </button>
          <button
            id="B2"
            onClick={() => {
              setbtn1Status(false);
              setbtn2Status(true);
            }}
            style={{ backgroundColor: btn2Status ? "" : "rgb(79, 28, 182)" }}
            className="Reg btn"
          >
            Register
          </button>
        </div>
        <form id="logform" style={{ display: btn1Status ? "block" : "none" }}>
          <input type="text" placeholder="Email Id" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submitbtn">
            Login
          </button>
        </form>
        <form id="regform" style={{ display: btn2Status ? "block" : "none" }}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Email Id" required />
          <input type="password" placeholder="Password" required />
          <button
            type="submit"
            className="submitbtn"
            onClick={() => {
              window.alert("Registered Successfully");
            }}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
