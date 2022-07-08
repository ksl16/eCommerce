import React from "react";

const HomeWidgets = ({ iconClass, widgetName }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div
        className="d-flex align-items-center border mb-4"
        style={{ padding: "30px" }}
      >
        <i
          className={`${iconClass} text-primary m-0 mr-3`}
          style={{ fontSize: "2.5rem", fontweight: 900 }}
        />
        <h5 className="font-weight-semi-bold m-0">{widgetName}</h5>
      </div>
    </div>
  );
};

export default HomeWidgets;
