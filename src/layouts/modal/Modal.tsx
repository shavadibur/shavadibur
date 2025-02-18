
import { ReactElement, useEffect } from 'react'
import style from './Modal.module.css'
import { createPortal } from 'react-dom'

export const Modal = ({children}: {children:ReactElement}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    },[])

    return createPortal(
        <div className={style['modal']}>
            {children}
        </div>, document.getElementById('portal')!
    )
}