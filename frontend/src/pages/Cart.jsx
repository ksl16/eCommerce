import React, { useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import {
  Footer,
  TopHeader,
  Header,
  SidebarCategories,
  Navigation,
} from "../index";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  cartQuantity,
  clearAllCartItems,
  decreaseCart,
  removeFromCart,
  subtotal,
} from "../features/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  //console.log("state", cart);
  const { cartItems, cartTotalPrice } = cart;
  const dispatch = useDispatch();

  const clearCart = () => {
    alert("Want to Clear the Cart!");
    dispatch(clearAllCartItems());
  };

  const handleRemove = (id) => {
    //alert(id);
    dispatch(removeFromCart(id));
  };

  const decreaseQuantity = (cartItem) => {
    //alert(cartItem.title);
    dispatch(decreaseCart(cartItem));
  };

  const increaseQuantity = (cartItem) => {
    //alert(cartItem.title);
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    dispatch(subtotal());
    dispatch(cartQuantity());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container-fluid">
        <TopHeader />
        <Header />
      </div>

      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <SidebarCategories />
          <div className="col-lg-9">
            <Navigation />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary mb-5">
        <BreadCrumbs
          pageTitle="Shopig Cart"
          mainPage="Home"
          subPage="Shopping Cart"
        />
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartItems.map((cartItem) => (
                  <tr key={cartItems.id}>
                    <td className="align-middle">
                      <img
                        src={cartItem.images[0]}
                        alt=""
                        style={{ width: "50px" }}
                      />
                      {cartItem.title}
                    </td>
                    <td className="align-middle">${cartItem.price}</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={() => decreaseQuantity(cartItem)}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={cartItem.cartQuentity}
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={() => increaseQuantity(cartItem)}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      ${cartItem.price * cartItem.cartQuentity}
                    </td>
                    <td className="align-middle">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleRemove(cartItem.id)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            {cartItems.length !== 0 && (
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <form className="mb-5" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">${cartTotalPrice}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">
                    {cartTotalPrice && `${cartTotalPrice + 10}`}
                  </h5>
                </div>
                <button className="btn btn-block btn-primary my-3 py-3">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
