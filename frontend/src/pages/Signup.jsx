import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/authSlice";

const Signup = () => {
  //console.log(userCreation, res);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  //console.log("auth", auth);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      console.log("error", message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("user", user);
    //userCreation(user);

    dispatch(registerUser(formData));
  };

  return (
    <div className="card card-register mx-auto mt-5 col-md-8">
      <div className="card-header">Register an Account</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-label-group">
                  <label htmlFor="fullName">Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    //required="required"

                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="inputEmail">Email :</label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                //required="required"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-label-group">
                  <label htmlFor="inputPassword">Password :</label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    //required="required"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-label-group">
                  <label htmlFor="inputPassword">Repeat password :</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Repeat password"
                    //required="required"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <br />
        <div className="text-center">
          <Link className="d-block medium" to="/forgotpass">
            Forgot Password?
          </Link>
        </div>
        <br />
        <div className="text-center">
          Are you already Register?
          <Link className="d-block medium" to="/login">
            Go to Login
          </Link>
        </div>
        <div className="text-center">
          <Link className="d-block medium" to="/">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
