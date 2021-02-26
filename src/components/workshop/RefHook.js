import React, { useRef, useEffect, useState } from "react";

function RefHook() {
  const [email, setEmail] = useState("");
  const nodeRef = useRef();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    // we check if the nodeRef is set first
    // if the dom element is mounted dynamically it might not be
    if (nodeRef.current) {
      nodeRef.current.focus();
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row-cols-1">
        <div className="col mb-3">
          <h1>Please enter your email</h1>
        </div>
        <div className="col mb-3">
          <hr />
        </div>
      </div>
      <div className="row-cols-1">
        <div className="col form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            id="email"
            placeholder="Enter your email"
            ref={nodeRef}
          />
        </div>
      </div>
    </div>
  );
}

export default RefHook;
