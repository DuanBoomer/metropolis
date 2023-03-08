import './payment_success.css'
import { useNavigate } from 'react-router-dom'
function PaymentSuccess({closeModal}){
    const navigate = useNavigate();
    function handleCLick(){
        window.scrollTo(0, 0)
        closeModal()
        navigate('/')
    }

    return (
        <section className='payment-success'>
            <img src="tick.png" alt="" />
            <h2>Your order has been accepted</h2>
            <p>Tranction ID: 1234567890</p>
            <button onClick={handleCLick}>Coutinue Shopping</button>
        </section>
    )
}

export default PaymentSuccess;