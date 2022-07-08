import React from "react";
import { Link } from "react-router-dom";

const HomeCatList = ({ cats }) => {
  //console.log(cats);
  //const { id, name, image } = cats;
  return (
    <div className="row px-xl-5 pb-3">
      {cats &&
        cats.map((cat) => {
          const { id, name, image } = cat;
          return (
            <div className="col-lg-4 col-md-6 pb-1" key={id}>
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <Link
                  to={`/category/${id}`}
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src={image} alt={name} />
                </Link>
                <h5 className="font-weight-semi-bold m-0">{name}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomeCatList;
