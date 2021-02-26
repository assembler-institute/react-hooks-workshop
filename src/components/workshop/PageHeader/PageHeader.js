import React from "react";

function PageHeader({ title }) {
  return (
    <div className="row row-cols-2 mb-3">
      <div className="col">
        <h3 className="h5">
          <code className="font-weight-bold text-uppercase">{title}</code>
        </h3>
      </div>
    </div>
  );
}

export default PageHeader;
