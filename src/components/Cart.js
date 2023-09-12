import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const context = useContext(ProductContext);
  const { cartItems, setCartItems } = context;

  const [quantity, setQuantity] = useState(cartItems.map(item => 1));

  const handleIncrement = (index) => {
    const newQuantity = [...quantity]
    newQuantity[index] += 1
    setQuantity(newQuantity)
  }

  const handleDecrement = (index) => {
    if (quantity[index] > 1) {
      const newQuantity = [...quantity]
      newQuantity[index] -= 1
      setQuantity(newQuantity)
    }
  }

  const handleDelete = (index) => {
    const newCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    setCartItems(newCartItems);
  }

  const total = cartItems.map((item, index) => {
    return item.price * quantity[index]
  }).reduce((acc, curr) => {
    acc += curr
    return acc;
  }, 0)

  return (
    <>
      {cartItems.map((item, index) => (
        <div className='container my-5 text-center' key={index}>
          <div className="card mb-3 m-auto" style={{ maxWidth: '800px' }}>
            <div className="row g-0">
              <div className="col-md-4" >
                <img src={item.image} className="img-fluid rounded-start" alt="..." style={{ maxHeight: '133px', padding: '8px 0' }} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div className='d-flex justify-content-between mt-3 m-auto' style={{ width: '385px' }}>
                    <span className="card-text ms-1">
                      <button className='myBtn' onClick={() => { handleDecrement(index) }}>-</button>
                      <input className='text-center' type="text" value={quantity[index]} min={0} onChange={() => { }} style={{ width: '50px', fontWeight: 'bold' }} />
                      <button className='myBtn' onClick={() => { handleIncrement(index) }}>+</button>
                    </span>
                    <span className='mx-3' style={{ fontSize: '20px', fontWeight: 'bold' }}> x </span>
                    <p className="card-text me-1" style={{ fontSize: '20px' }}><b>${item.price}</b></p>
                    <button className='mx-3' onClick={() => handleDelete(index)} style={{
                      height: '30px',
                      width: '50px',
                      borderRadius: '20px',
                      fontWeight: 'bold'
                    }}>Del</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div >
      ))}

      {
        cartItems.length ? <div className="container my-3 text-center" style={{ border: '1px solid gray', width: '800px', borderRadius: '4px' }}>
          <div className="row my-2">
            <div className="col-md-6">Price ({cartItems.length} items)</div>
            <div className="col-md-6">${total.toFixed(2)}</div>
          </div>
          <div className="row my-2">
            <div className="col-md-6">Delivery Charges</div>
            <div className="col-md-6">$5</div>
          </div>
          <div className="row my-2">
            <div className="col-md-6">Total</div>
            <div className="col-md-6">${(total + 5).toFixed(2)}</div>
          </div>
          <div className="row">
            <Link class="btn btn-dark" to="/checkout" role="button" style={{ borderRadius: 0 }}>Buy Now</Link>
          </div>
        </div> : <div className="container text-center" style={{ marginTop: '155px' }}>
          <h1 className='my-5'>Your cart is empty!</h1>
          <Link class="btn btn-dark" to="/" role="button" style={{ fontSize: '20px' }}>Browse Products</Link>
        </div>
      }

    </>
  )
}

export default Cart
