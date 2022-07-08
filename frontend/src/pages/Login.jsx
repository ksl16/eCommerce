import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
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
  const handleLogin = (e) => {
    e.preventDefault();
    //console.log("user", user);
    //userCreation(user);

    dispatch(login(formData));
  };
  return (
    <div className="card card-login mx-auto mt-5 col-md-8 col-lg-6">
      <div className="card-header">Login</div>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="inputEmail">Email :</label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required="required"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="inputEmail">Password :</label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required="required"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="checkbox">
              <label>
                <input type="checkbox" value="remember-me" />
                Remember Password
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
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
          Stil Not Sign up?
          <Link className="d-block medium" to="/register">
            Sign up First
          </Link>
        </div>
        <br />
        <div className="text-center">
          <Link className="d-block medium" to="/">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
