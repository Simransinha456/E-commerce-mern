import React, {createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

  //first create an empty cart
  const getDefaultCart = ()=>{
    let cart = {};
    for(let index=0; index<all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems]= useState(getDefaultCart());
    // now using the context we can access the cartItems to any component
    // console.log(cartItems);
    
    //create for add to cart 
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    //create one getTotalAmount function--
    const  getTotalAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]; 
            }
        }
        return totalAmount;
    }
    // this is for cart that is visible on navbar
    const getTotalCartItems=() =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    
    const contextValue = {getTotalCartItems, getTotalAmount, all_product, cartItems, addToCart, removeFromCart};  
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

// explanation--
// first we created ShopContext using createContext then we have created one function -ShopContextProvider  where we pass the props and also created a contextValue variable where we stored all the data/product where we want to access using context. Then we return ShopContextProvider and then we pass the value and wrap props.children.
