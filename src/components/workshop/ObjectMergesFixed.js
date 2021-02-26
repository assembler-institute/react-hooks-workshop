import React, { useState } from "react";
import FormGroup from "./FormGroup";

function ObjectMergesFixed() {
  const [userData, setUserData] = useState({
    firstName: "dani",
    lastName: "assembler",
    email: "dani@mail.com",
  });

  function handleInputChanges(event) {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // this now works as expected 💯
  function handleFirstNameChange(event) {
    setUserData((prevData) => ({
      ...prevData,
      firstName: event.target.value,
    }));
  }

  function handleLastNameChange(event) {
    setUserData((prevData) => ({
      ...prevData,
      lastName: event.target.value,
    }));
  }

  function handleEmailChange(event) {
    setUserData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
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
            inputValue={userData.firstName}
            handleInputChange={handleFirstNameChange}
            inputName="firstName"
            inputId="firstName"
            labelText="First Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.lastName}
            handleInputChange={handleLastNameChange}
            inputName="lastName"
            inputId="lastName"
            labelText="Last Name"
            inputType="text"
          />
          <FormGroup
            inputValue={userData.email}
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

export default ObjectMergesFixed;
