import React from "react";
import Slider from "react-slick";

const Brand = () => {
  const settings = {
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="row px-xl-5">
      <div className="col">
        <Slider {...settings}>
          <div className="vendor-item border p-4">
            <img src="img/vendor-1.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-2.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-3.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-4.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-5.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-6.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-7.jpg" alt="" />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-8.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
