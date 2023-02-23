import './payment_form.css'

function PaymentForm({openModal}) {
    return (
        <section className='payment-form'>
            <h2>Order Summary</h2>
            <h3>Payment Details</h3>
            <section className='radio-buttons'>
                <div>
                    <input type="radio" name="" id="cash-on-delivery" />
                    <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>

                <div>
                    <input type="radio" name="" id="upi" />
                    <label htmlFor="upi">UPI</label>
                </div>

                <div>
                    <input type="radio" name="" id="credit-debit-card" />
                    <label htmlFor="credit-debit-card">Credit or Debit card</label>
                </div>
            </section>

            <section className='form-input card-details'>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Type Here..." />

                <label htmlFor="card-holder-name">Card Holder Name</label>
                <input type="text" id="card-holder-name" placeholder="Type Here..." />

                <label htmlFor="card-number">Card Number</label>
                <input type="text" id="card-number" placeholder="0000****1234" />

                <label htmlFor="expiry">Expiry</label>
                <input type="text" id="expiry" placeholder="MM/YY" />

                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="001" />
            </section>

            <table className='final-payment'>
                <tr>
                    <th>Sub Total</th>
                    <td>$549.00</td>
                </tr>

                <tr>
                    <th>Tax</th>
                    <td>$54.90</td>
                </tr>

                <tr>
                    <th>Coupon Discount</th>
                    <td>-$54.90</td>
                </tr>

                <tr>
                    <th>Shipping Cost</th>
                    <td>-$5.90</td>
                </tr>

                <hr />
                <tr>
                    <th>Total</th>
                    <td>$5490.00</td>
                </tr>
            </table>

            <button className='payment-button' onClick={openModal}>Pay $5490.00</button>

        </section>
    )
}

export default PaymentForm;