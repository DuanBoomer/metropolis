import ReactDOM from "react-dom";
import React from "react";

function Modal({children, open}){
    const modal_styles = {
        backgroundColor: 'rgba(0, 0, 0, .7)',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    if(!open) return null
    return ReactDOM.createPortal(
        <div style={modal_styles}>
            {children}
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;