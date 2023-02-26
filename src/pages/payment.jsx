import ShippingInfo from "../components/payment_page/shipping_info";
import DeliveryItems from "../components/payment_page/delivery_items";
import PaymentForm from "../components/payment_page/payment_form";
import PaymentSuccess from "../components/payment_page/payment_success";
import Modal from "../components/main_components/modal";
import React from "react";

function Payment(){
    const [modalOpened, setModalOpened] = React.useState(false)
    const styles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    }

    function openModal(){
        setModalOpened(true)
    }

    function closeModal(){
        setModalOpened(false)
    }
    return (
       <div style={styles}>
        <DeliveryItems/>
        <PaymentForm openModal = {openModal}/>
        <ShippingInfo/>
        <Modal open = {modalOpened}>
            <PaymentSuccess closeModal = {closeModal}/>
        </Modal>
       </div>
    )
}

export default Payment;