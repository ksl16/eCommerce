import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="header-carousel" className="carousel slide">
      <div className="carousel-inner">
        <Slider {...settings}>
          <div className="carousel-item active" style={{ height: "410px" }}>
            <img className="img-fluid" src="img/carousel-1.jpg" alt="title" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Fashionable Dress
                </h3>
                <Link to="" className="btn btn-light py-2 px-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "410px" }}>
            <img className="img-fluid" src="img/carousel-2.jpg" alt="title" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Reasonable Price
                </h3>
                <Link to="" className="btn btn-light py-2 px-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
