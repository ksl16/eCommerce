import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOrNot, slideRange } from "../features/filterSlice";

const Shopfilter = () => {
  const { categories } = useSelector((state) => state.product);

  //console.log("categories", categories);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    //console.log(e.target);
    //const { value, checked } = e.target;
    //console.log(`${value} is ${checked}`);
    //if (checked) {
    //setCats([...cats, value]);
    //} else {
    //setCats(cats.filter((e) => e !== value));
    // }
    dispatch(checkOrNot(e));
    dispatch(slideRange(e));
  };

  return (
    <>
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by Category</h5>
        <form>
          {categories.map((cat) => (
            <div
              className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
              key={cat.id}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id={cat.id}
                value={cat.name}
                onChange={handleChange}
              />
              <label className="custom-control-label" htmlFor={cat.id}>
                {cat.name}
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
          ))}
        </form>
      </div>
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
        <input type="range" onInput={handleChange} min="0" max="1000" />
      </div>
    </>
  );
};

export default Shopfilter;
