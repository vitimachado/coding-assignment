/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { IModal } from '../../types/common';

import './styles.css'

export const Modal = ({
    children,
    hasDivider = false,
    open = false,
    closeOnClickOutside = true,
    onClosed = () => null
}: IModal) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(open !== show) {
            setShow(open);
        }
    }, [open]);

    const handleOnClickOutside = (e: React.MouseEvent) => {
        e.stopPropagation()
        closeOnClickOutside && onClosed();
    }

    const handleOnCLosed = (e: React.MouseEvent) => {
        e.stopPropagation()
        onClosed();
    }

    return show ? (
        <div className='modal-background centered' onClick={handleOnClickOutside}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className='modal-card'>
                    <div className={`modal-header ${ hasDivider ? 'divider' : '' }`}>
                        <button aria-label='close' className='modal-bnt-close' onClick={handleOnCLosed}>X</button>
                    </div>
                    <div className='modal-content'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    ) : <></>
}
