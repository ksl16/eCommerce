import React from "react";
import { useGetAllCategoriesQuery } from "../services/product";

//import { Link } from "react-router-dom";
import {
  Brand,
  Footer,
  Header,
  HomeCatList,
  HomeCollectionWidgets,
  HomeSlider,
  HomeWidgets,
  Navigation,
  SidebarCategories,
  StayUpdate,
  TopHeader,
} from "../index";

//const publicUri = process.env.REACT_APP_PUBLIC_URI;
//import axios from "axios";

//const baseUrl = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const { data } = useGetAllCategoriesQuery();

  //console.log("useGetAllCategoriesQuery", useGetAllCategoriesQuery());

  //---------------fetch all Categories-------------------

  return (
    <>
      <div className="container-fluid">
        <TopHeader />
        <Header />
      </div>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <SidebarCategories />
          <div className="col-lg-9">
            <Navigation />
            <HomeSlider />
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <HomeWidgets iconClass="fa fa-check" widgetName="Quality Product" />
          <HomeWidgets
            iconClass="fa fa-shipping-fast"
            widgetName="Free Shipping"
          />
          <HomeWidgets
            iconClass="fas fa-exchange-alt"
            widgetName="14-Day Return"
          />
          <HomeWidgets
            iconClass="fa fa-phone-volume"
            widgetName="24/7 Support"
          />
        </div>
      </div>
      <div className="container-fluid pt-5">
        <HomeCatList cats={data} />
      </div>

      <div className="container-fluid offer pt-5">
        <HomeCollectionWidgets />
      </div>

      <div className="container-fluid bg-secondary my-5">
        <StayUpdate />
      </div>

      <div className="container-fluid py-5">
        <Brand />
      </div>

      <Footer />
    </>
  );
};

export default Home;
