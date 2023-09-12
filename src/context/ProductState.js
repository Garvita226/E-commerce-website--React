import React, {useEffect, useState} from 'react'
import { ProductContext } from './ProductContext'

const ProductState = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('Updating localStorage:', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems')
    if(storedCartItems) {
      console.log('Loading from localStorage:', JSON.parse(storedCartItems));
      setCartItems(JSON.parse(storedCartItems))
    }
  }, [])

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems([...cartItems, product])
  }

  return (
    <div>
      <ProductContext.Provider value={{cartItems, setCartItems, addToCart}}>
        {props.children}
      </ProductContext.Provider>
    </div>
  )
}

export default ProductState
