import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const publicUri = process.env.REACT_APP_PUBLIC_URI;
const AlsoLike = () => {
  const settings = {
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel related-carousel">
          <Slider {...settings}>
            <div className="card product-item border-0">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`${publicUri}/img/product-1.jpg`}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>View Detail
                </Link>
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </Link>
              </div>
            </div>
            <div className="card product-item border-0">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`${publicUri}/img/product-2.jpg`}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>View Detail
                </Link>
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </Link>
              </div>
            </div>
            <div className="card product-item border-0">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`${publicUri}/img/product-3.jpg`}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>View Detail
                </Link>
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </Link>
              </div>
            </div>
            <div className="card product-item border-0">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`${publicUri}/img/product-4.jpg`}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>View Detail
                </Link>
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </Link>
              </div>
            </div>
            <div className="card product-item border-0">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`${publicUri}/img/product-5.jpg`}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                <div className="d-flex justify-content-center">
                  <h6>$123.00</h6>
                  <h6 className="text-muted ml-2">
                    <del>$123.00</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>View Detail
                </Link>
                <Link to="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
