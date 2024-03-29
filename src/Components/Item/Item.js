//This page is connected with Popular.js components---

import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  // console.log(props.name)

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}> {/* it will visible in params */}
        <img onClick={window.scrollTo(0, 0)} src={props.image}/>
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">Rs{props.new_price}</div>
        <div className="item-price-old">Rs{props.old_price}</div>
      </div>
    </div>
  );
};
export default Item;
