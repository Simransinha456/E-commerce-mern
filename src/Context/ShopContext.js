import React, {createContext} from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

// explanation--
// first we created ShopContext using createContext then we have created one function -ShopContextProvider  where we pass the props and also created a contextValue variable where we stored all the data/product where we want to access using context. Then we return ShopContextProvider and then we pass the value and wrap props.children.
