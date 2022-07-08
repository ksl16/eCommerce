import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="row bg-secondary py-2 px-xl-5">
      <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <Link className="text-dark" to="">
            FAQs
          </Link>
          <span className="text-muted px-2">|</span>
          <Link className="text-dark" to="">
            Help
          </Link>
          <span className="text-muted px-2">|</span>
          <Link className="text-dark" to="">
            Support
          </Link>
        </div>
      </div>
      <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <Link className="text-dark px-2" to="">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link className="text-dark px-2" to="">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="text-dark px-2" to="">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link className="text-dark px-2" to="">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link className="text-dark pl-2" to="">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
