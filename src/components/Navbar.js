import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

const Navbar = () => {
    const context = useContext(ProductContext);
    const { cartItems } = context;

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Shoppiee</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                        </ul>
                        <Link to='/cart'>
                            <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: 'white', marginRight: '5px' }}></i>
                            <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ fontSize: '11px', right: '-3px' }}>
                                {cartItems.length}
                            </span>
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
