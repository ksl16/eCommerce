import React, { useState } from "react";
import { useGetAllCategoriesQuery } from "../services/product";
import { Link } from "react-router-dom";

const SidebarCategories = () => {
  const [activeCat, setActiveCat] = useState(true);
  const { data } = useGetAllCategoriesQuery();

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <Link
        to=""
        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
        onClick={() => setActiveCat(!activeCat)}
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
      >
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </Link>
      {activeCat && (
        <nav className="collapse navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0">
          <div className="navbar-nav w-100 overflow-hidden catName-listing">
            {data?.map((cat) => (
              <Link
                to={`/category/${cat.id}`}
                key={cat.id}
                className="nav-item nav-link"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default SidebarCategories;
