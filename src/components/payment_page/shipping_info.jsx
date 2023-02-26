import './shipping_info.css'

function ShippingInfo() {
    return (
        <section className='shipping-info'>
            <div className='shipping-info-heading'>
                <h2>Delivery Information</h2>
                <button className='filled-button'>Save Information</button>
            </div>

            <section className='shipping-info-form'>
                <div className='form-input'>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" placeholder="Type Here..." />
                </div>

                <div className='form-input'>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" placeholder="Type Here..." />
                </div>
                <div className='form-input'>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" placeholder="Type Here..." />
                </div>

                <div className='form-input'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Type Here..." />
                </div>

                <div className='form-input'>
                    <label htmlFor="city">City/Town</label>
                    <input type="text" id="city" placeholder="Type Here..." />
                </div>

                <div className='form-input'>
                    <label htmlFor="zipcode">Zip Code</label>
                    <input type="text" id="zipcode" placeholder="Type Here..." />
                </div>


                <div className='form-input'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="Type Here..." />
                </div>
            </section>
        </section>
    )
}

export default ShippingInfo;