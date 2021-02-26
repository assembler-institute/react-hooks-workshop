import React, { useState } from "react";
import FormGroup from "./FormGroup";

function ObjectMergesBug() {
  const [userData, setUserData] = useState({
    firstName: "dani",
    lastName: "assembler",
    email: "dani@mail.com",
  });

  // this doesn't work as expected ⚠️
  function handleFirstNameChange(event) {
    setUserData({
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setUserData({
      lastName: event.target.value,
    });
  }

  function handleEmailChange(event) {
    setUserData({
      email: event.target.value,
    });
  }

  return (
    <div className="container mt-5">
      <div className="row-cols-1">
        <div className="col mb-3">
          <h1>Current user</h1>
          <code>{JSON.stringify(userData, null, 2)}</code>
        </div>
        <div className="col mb-3">
          <hr />
        </div>
        <div className="row-cols-1">
          <FormGroup
            inputValue={userData.firstName || "BUG"}
            handleInputChange={handleFirstNameChange}
            inputName="firstName"
            inputId="firstName"
            labelText="First Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.lastName || "BUG"}
            handleInputChange={handleLastNameChange}
            inputName="lastName"
            inputId="lastName"
            labelText="Last Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.email || "BUG"}
            handleInputChange={handleEmailChange}
            inputName="email"
            inputId="email"
            labelText="Email"
            inputType="email"
          />
        </div>
      </div>
    </div>
  );
}

export default ObjectMergesBug;
