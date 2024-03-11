import React, { useEffect, useState } from "react";
import "./Popular.css";
// import data_product from ".././Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  const[popular_products, setPopular_Products]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/newproduct/popularinwomen')
    .then((response)=> response.json())
    .then((data)=>setPopular_Products(data))
    .catch((error) => console.error('Error fetching products:', error));
  },[])


  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular_products.map((item) => {
          return (
            <Item
              key={1}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
