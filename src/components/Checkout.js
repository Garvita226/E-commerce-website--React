import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ProductContext } from '../context/ProductContext';

const Checkout = () => {
    const navigate = useNavigate();

    const context = useContext(ProductContext);
    const {setCartItems} = context;

    const [paymentMethod, setPaymentMethod] = useState('cash')

    const [fieldValues, setFieldValues] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardname: '',
        cardnumber: '',
        cvv: ''
    })

    const isFormValid = () => {
        const {
            name, email, address, city, state, zip,
            cardname, cardnumber, cvv
        } = fieldValues;

        if (paymentMethod === 'cash') {
            return name && email && address && city && state && zip;
        } else if (paymentMethod === 'card') {
            return (
                name && email && address && city && state && zip &&
                cardname && cardnumber && cvv
            );
        }

        return false;
    }

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFieldValues({ ...fieldValues, [name]: value })
    }

    const handleChange = (e) => {
        setPaymentMethod(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/confirm');
        setCartItems([]);
    }

    return (
        <>
            <div className="container my-3" style={{ width: '1000px' }}>
                <h2 className='text-center'>Checkout Form</h2>
                <div className="container">
                    <form className="row g-3 my-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" name='name' className="form-control" id="name" required onChange={handleFieldChange} value={fieldValues.name} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name='email' className="form-control" id="email" required onChange={handleFieldChange} value={fieldValues.email} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" name='address' className="form-control" id="address" required onChange={handleFieldChange} value={fieldValues.address} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" name='city' className="form-control" id="city" required onChange={handleFieldChange} value={fieldValues.city} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" name='state' className="form-control" id="state" required onChange={handleFieldChange} value={fieldValues.state} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="zip" className="form-label">Zip</label>
                            <input type="text" name='zip' className="form-control" id="zip" required onChange={handleFieldChange} value={fieldValues.zip} />
                        </div>
                        <h4>Choose Payment Method</h4>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment" id="cash" value='cash' checked={paymentMethod === 'cash'} onChange={handleChange} />
                            <label class="form-check-label" for="cash">
                                Cash on Delivery
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="payment" id="card" value='card' checked={paymentMethod === 'card'} onChange={handleChange} />
                            <label class="form-check-label" for="card">
                                Card Payment
                            </label>
                        </div>

                        {paymentMethod === 'card' && (<div className="container my-3" style={{ width: '900px' }}>
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" placeholder="Name of card-holder" aria-label="Name of card-holder" name='cardname' required onChange={handleFieldChange} value={fieldValues.cardname} />
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="Card Number" aria-label="Card Number" name='cardnumber' required onChange={handleFieldChange} value={fieldValues.cardnumber} />
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control" placeholder="CVV" aria-label="CVV"
                                        name='cvv' required onChange={handleFieldChange} value={fieldValues.cvv} />
                                </div>
                            </div>
                        </div>)}


                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark my-2" style={{
                                width: '170px',
                                height: '45px',
                                fontSize: '20px'
                            }} disabled={!isFormValid()}>PLACE ORDER</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Checkout
