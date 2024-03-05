import React from 'react'
import './Item.css'

const Item = (props) => {

  console.log(props.name)
  // console.log(props.image)
  return (
    <div className='item' >

    <img src={props.image} style={{width:"300px"}} alt=''/>
    <p>{props.name}</p>
    <div className="item-prices">
        <div className="item-price-new">
        Rs{props.new_price}
        </div>
        <div className="item-price-old">
        Rs{props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item