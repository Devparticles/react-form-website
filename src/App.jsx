import React from "react";
const index = () => {
  return (
    <div className="form-container">
      <div className="form-item">
        <label htmlFor="nameField">First Name:</label>
        <input
          id="nameField"
          inputMode="text"
          placeholder="Enter your full name here"
          type="text"
        />
      </div>
      <div className="form-item">
        <label htmlFor="emailField">Email Address:</label>
        <input
          id="emailField"
          inputMode="email"
          placeholder="example@gmail.com"
          type="text"
        />
      </div>
      <div className="form-item">
        <label htmlFor="phoneField">Phone Number:</label>
        <input
          id="phoneField"
          inputMode="tel"
          placeholder="+971 "
          type="text"
          defaultValue="+971"
        />
      </div>
    </div>
  );
};

export default index;
