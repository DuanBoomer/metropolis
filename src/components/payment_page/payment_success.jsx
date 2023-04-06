import './payment_success.css'
import { useNavigate } from 'react-router-dom'
function PaymentSuccess({closeModal}){
    const navigate = useNavigate();
    function handleCLick(){
        window.scrollTo(0, 0)
        closeModal()
        navigate('/')
    }

    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            '01234567890123456789';
        
    for (let i = 1; i <= 15; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
            
        pass += str.charAt(char)
    }

    return (
        <section className='payment-success'>
            <img src="tick.png" alt="" />
            <h2>Your order has been accepted</h2>
            <p>Tranction ID: {pass}</p>
            <button onClick={handleCLick}>Coutinue Shopping</button>
        </section>
    )
}

export default PaymentSuccess;