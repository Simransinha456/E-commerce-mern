// This page linked ith Item.js --
// 1st part of Product.js page

import React from "react";
import "./Breadcrums.css";
import arrow_icon from ".././Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  // with the help of this props we are getting this product
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} />
      SHOP <img src={arrow_icon} />
      {product?.category} <img src={arrow_icon} />
      {product?.name}
    </div>
  );
};
export default Breadcrums;
