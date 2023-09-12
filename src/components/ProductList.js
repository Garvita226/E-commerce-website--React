import React, {useState, useEffect} from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
    const url = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData () {
            const data = await fetch(url);
            const parsedData = await data.json()
            setProducts(parsedData)
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='container my-5 text-center'>
           { <div className="row d-flex justify-content-evenly my-2">
            {
                products.map((element) => {
                    return <div className='col-md-4 my-3' key={element.id} >
                        <ProductItem title={element.title.slice(0,40)} img={element.image} category={element.category} description={element.description} price={element.price} rate={element.rating.rate} count={element.rating.count} id={element.id}/>
                    </div>
                })
            }
            
            
            </div>}

        </div>
    )
}

export default ProductList
