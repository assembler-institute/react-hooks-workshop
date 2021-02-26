import React, { useState } from "react";

import FormGroup from "./FormGroup";

function MultipleStateValues() {
  const [mounted, setMounted] = useState(true);
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  function increment() {
    setCount(count + 1);
  }

  function setUserName(event) {
    setUserData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  }

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button
            onClick={() => setMounted((mounted) => !mounted)}
            className="btn btn-primary"
          >
            Toggle
          </button>
          {mounted ? (
            <code className="ml-3">isMounted</code>
          ) : (
            <code className="ml-3">notMounted</code>
          )}
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col mb-3">
          <button onClick={increment} className="btn btn-primary">
            Increment
          </button>
          <code className="ml-3">{count}</code>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col mb-3">
          <FormGroup
            inputValue={userData.name}
            handleInputChange={setUserName}
            inputName="name"
            inputId="name"
            labelText="First Name"
            inputType="text"
          />
          <code className="ml-3">{JSON.stringify(userData, null, 2)}</code>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default MultipleStateValues;
