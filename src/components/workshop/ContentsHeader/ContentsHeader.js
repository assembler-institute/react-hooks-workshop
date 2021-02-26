import React from "react";

function ContentsHeader({ locale }) {
  return (
    <h3 className="h5">
      Current locale: <code className="font-weight-bold">{locale}</code>
    </h3>
  );
}

export default ContentsHeader;
