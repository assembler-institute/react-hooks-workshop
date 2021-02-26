import React, { useState } from "react";

import useDocumentTitle from "./useDocumentTitle";

function Counter() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  const increment = () => setCount(count + 1);

  return (
    <div className="container mt-4">
      <div className="row-cols-1">
        <div className="col mb-3">
          <button onClick={increment} className="btn btn-primary">
            Increment
          </button>
          <code className="ml-3">{count}</code>
        </div>
      </div>
    </div>
  );
}

export default Counter;
