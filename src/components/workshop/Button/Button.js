import React from "react";

function Button({ toggleLocale }) {
  return (
    <button className="btn btn-primary ml-auto" onClick={toggleLocale}>
      Toggle Locale
    </button>
  );
}

export default Button;
