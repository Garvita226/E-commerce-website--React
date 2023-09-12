import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <div className='container text-center' style={{marginTop:'155px'}}>
      <h1 style={{color:'green', marginBottom:'20px'}}>ORDER CONFIRMED!</h1>
      <h2>Thank you for shopping! <i class="fa-regular fa-face-smile"></i></h2>
      <Link class="btn btn-dark" to="/" role="button" style={{margin:'35px', fontSize:'20px'}}>Continue Shopping</Link>
    </div>
  )
}

export default Confirmation
