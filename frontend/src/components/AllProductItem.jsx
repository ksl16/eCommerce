import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
//const publicUri = process.env.REACT_APP_PUBLIC_URI;
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartQuantity, subtotal } from "../features/cartSlice";

const AllProductItem = ({ data, searchterm }) => {
  console.log("data", data);

  const [newData, setNewData] = useState([]);

  const dispatch = useDispatch();
  const handleCart = (data) => {
    dispatch(addToCart(data));
    dispatch(subtotal());
    dispatch(cartQuantity());
  };

  //console.log("data", data);

  const { cats, prices } = useSelector((state) => state.filter);
  //console.log("filter", prices);
  useEffect(() => {
    //console.log("useEffect");
    let newVal1;

    newVal1 = data?.filter((newVal) => {
      console.log(newVal.category.name);
      console.log(cats);
      return cats.includes(newVal.category.name);
    });

    console.log("newVal1", newVal1);
    setNewData(newVal1);
    //setNewData(newVal2);
  }, [cats, data, prices]);
  //console.log("newdata", newVal1);
  console.log("newdata", newData);

  if (cats.length > 0) {
    return (
      <>
        {newData &&
          newData.map((dataItem) => {
            const { id, title, price, images } = dataItem;
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={id}>
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                      className="img-fluid w-100"
                      src={images[0]}
                      alt={title}
                    />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{title}</h6>
                    <div className="d-flex justify-content-center">
                      <h6>${price}</h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link
                      to={`/product/${id}`}
                      className="btn btn-sm text-dark p-0"
                    >
                      <i className="fas fa-eye text-primary mr-1"></i>View
                    </Link>
                    <button
                      onClick={() => handleCart(dataItem)}
                      className="btn btn-sm text-dark p-0"
                    >
                      <i className="fas fa-shopping-cart text-primary mr-1"></i>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  }

  return (
    <>
      {data &&
        data
          .filter((val) => {
            if (val === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchterm.toLowerCase())
            ) {
              return val;
            } else if (val.category.name == cats) {
              console.log("val", val);
            }
            return false;
          })

          .map((dataItem) => {
            const { id, title, price, images } = dataItem;
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={id}>
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                      className="img-fluid w-100"
                      src={images[0]}
                      alt={title}
                    />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{title}</h6>
                    <div className="d-flex justify-content-center">
                      <h6>${price}</h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link
                      to={`/product/${id}`}
                      className="btn btn-sm text-dark p-0"
                    >
                      <i className="fas fa-eye text-primary mr-1"></i>View
                    </Link>
                    <button
                      onClick={() => handleCart(dataItem)}
                      className="btn btn-sm text-dark p-0"
                    >
                      <i className="fas fa-shopping-cart text-primary mr-1"></i>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default AllProductItem;
