import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ pageTitle, mainPage, subPage }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "200px" }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">{pageTitle}</h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <Link to="">{mainPage}</Link>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">{subPage}</p>
      </div>
    </div>
  );
};

export default BreadCrumbs;
