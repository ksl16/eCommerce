import React from "react";
import { Link } from "react-router-dom";

const ForGotPass = () => {
  return (
    <div className="card card-login mx-auto mt-5 col-md-6">
      <div className="card-header">Reset Password</div>
      <div className="card-body">
        <div className="text-center mb-4">
          <h4>Forgot your password?</h4>
          <p>
            Enter your email address and we will send you instructions on how to
            reset your password.
          </p>
        </div>
        <form>
          <div className="form-group">
            <div className="form-label-group">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Enter email address"
                required="required"
                autofocus="autofocus"
              />
            </div>
          </div>
          <Link className="btn btn-primary btn-block" to="/">
            Reset Password
          </Link>
        </form>
        <div className="text-center">
          <Link className="d-block medium" to="/">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForGotPass;
