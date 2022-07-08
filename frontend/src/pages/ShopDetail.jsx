import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";
import { subtotal, cartQuantity, addToCart } from "../features/cartSlice";
import BreadCrumbs from "../components/BreadCrumbs";
import AlsoLike from "../components/AlsoLike";
import { useGetProductByIdQuery } from "../services/product";
import { useDispatch } from "react-redux";

//import product640 from "../assets/images/product640.jpg";
//import product1200 from "../assets/images/product640.jpg";

import {
  Footer,
  TopHeader,
  Header,
  SidebarCategories,
  Navigation,
} from "../index";

const ShopDetail = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);

  const dispatch = useDispatch();

  //console.log("data", data);
  //console.log("findData", findData);

  const itemAddedToCart = (data) => {
    dispatch(addToCart(data));
    dispatch(subtotal());
    dispatch(cartQuantity());
  };

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
          pageTitle="Shop Detail"
          mainPage="Home"
          subPage="Shop Detail"
        />
      </div>

      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  //src: product640,
                  src: data?.images[0],
                },
                largeImage: {
                  src: data?.images[0],
                  //src: product1200,
                  width: 1200,
                  height: 900,
                },
                enlargedImageContainerDimensions: {
                  width: "100%",
                  height: "100%",
                },
                shouldUsePositiveSpaceLens: true,
                style: {
                  zIndex: 9,
                },
              }}
            />
          </div>

          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{data?.title}</h3>

            <h3 className="font-weight-semi-bold mb-4">${data?.price}</h3>
            <p className="mb-4">{data?.description}</p>

            <div className="d-flex align-items-center mb-4 pt-2">
              <button
                className="btn btn-primary px-3"
                onClick={() => itemAddedToCart(data)}
              >
                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">You May Also Like</span>
          </h2>
        </div>
        <AlsoLike />
      </div>

      <Footer />
    </>
  );
};

export default ShopDetail;
