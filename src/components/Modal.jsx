import React from 'react';
import { FaWindowClose } from "react-icons/fa";

export default function Modal({ children, open = false, handleClose, width = 'auto' }) {

    if (!open) return;

    return (
        <div className='modal'>
            <div className='modal-wrapper'>
                <div className='modal-container' style={{ width }}>
                    {children}
                    <FaWindowClose className='btn-clotse' onClick={handleClose} />
                </div>
            </div>
        </div>
    )
}
