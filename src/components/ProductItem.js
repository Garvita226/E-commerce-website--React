import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const {title, img, price, rate, count, id} = props;

    return (
        <div className='container'>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." style={{ height: "400px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">$ {price}</p>
                    <p className="card-text">{rate} <i className="fa-solid fa-star fa-xs"></i> {count} reviews</p>
                    <Link to={`/detail/${id}`} className="btn btn-dark">View Product</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
