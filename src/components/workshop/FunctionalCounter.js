import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  // this doesn't work as expected
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}>increment by 3</button>
    </div>
  );
}

export default FunctionalCounter;
