import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [btnText, setBtnText] = useState('Add to Cart');

    const context = useContext(ProductContext);
    const {addToCart} = context;

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            // console.log(data)
            // console.log(data.rating)
        }
        fetchProduct();
    }, [id])

    const {title, price, description, category, image, rating} = product

    const handleClick = () => {
        const addedProduct = {
            id, title, price, image
        }
        console.log(addedProduct)
        addToCart(addedProduct)
        setBtnText('Added to Cart')
    }


    return (
        <>
        {product.rating && <div className='container my-5 text-center'>
            <div className="card mb-3 p-4 m-auto">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text"><em>Category - {category}</em></p>
                            <p className="card-text">{description}</p>
                            <p className="card-text mt-5"><b>Price - ${price}</b></p>
                            <p className="card-text">{rating.rate} <i className="fa-solid fa-star fa-xs"></i> {rating.count} reviews</p>
                            <button type="button" className="btn btn-dark " onClick={handleClick}>{btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default SingleProduct
