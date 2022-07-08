import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../features/authSlice";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const isBigScreen = useMediaQuery({ minWidth: 992 });
  //const issmallScreen = useMediaQuery({ maxWidth: 991 });
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
        <Link to="/" className="text-decoration-none d-block d-lg-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">
              E
            </span>
            Shopper
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={
            isBigScreen
              ? { display: "flex", flexBasis: "auto" }
              : toggleMenu
              ? { display: "block" }
              : { display: "none" }
          }
          className="collapse navbar-collapse justify-content-between"
        >
          <div className="navbar-nav mr-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/product" className="nav-item nav-link">
              Shop
            </Link>
            <Link to="/cart" className="nav-item nav-link">
              Cart
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/checkout" className="dropdown-item">
                  Checkout
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <div className="navbar-nav ml-auto py-0">
            {!user ? (
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="nav-item nav-link">
                Log Out
              </button>
            )}

            <Link to="/register" className="nav-item nav-link">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
