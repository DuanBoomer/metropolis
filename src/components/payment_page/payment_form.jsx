import './payment_form.css'
import { useLocation, useParams } from 'react-router-dom';
import productData from '../../database/product_card_data'
function PaymentForm({openModal}) {

    const location = useLocation()
    const { price, quantity } = location.state

    const payment_price = price * quantity
    const tax = Math.round(payment_price * 0.105)
    const discount = Math.round(payment_price * 0.025)
    const shipping = Math.round(payment_price * 0.02)
    const total = payment_price + tax - discount + shipping

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
                    <td>&#8377;{payment_price}</td>
                </tr>

                <tr>
                    <th>Tax</th>
                    <td>&#8377;{tax}</td>
                </tr>

                <tr>
                    <th>Coupon Discount</th>
                    <td>&#8377;{discount}</td>
                </tr>

                <tr>
                    <th>Shipping Cost</th>
                    <td>&#8377;{shipping}</td>
                </tr>

                <hr />
                <tr>
                    <th>Total</th>
                    <td>&#8377;{total}</td>
                </tr>
            </table>

            <button className='payment-button' onClick={openModal}>Pay &#8377;{total}</button>

        </section>
    )
}

export default PaymentForm;