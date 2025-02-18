import { NavLink } from "react-router"
import style from './MobileNav.module.css'
import { useContext, useState } from "react"
import { LanguageContext } from "../../../context/LanguageContext"

import mobileMenuIcon from '../../../assets/icons/burger-menu.svg'
import mobileCloseIcon from '../../../assets/icons/close-circle.svg'
import { Modal } from "../../../layouts/modal/Modal"

export const MobileNav = () => {

    const languageContext = useContext(LanguageContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)} className={style['mobile-menu-button']}>
                <img src={mobileMenuIcon} alt="mobileMenuIcon" />
            </button>
            {
                isOpen &&
                <Modal>
                    <nav className={style['mobile-nav']}>
                        <button className={style['close-button']} onClick={() => setIsOpen(false)}>
                            <img src={mobileCloseIcon} alt="mobileCloseIcon" />
                        </button>
                        <NavLink onClick={() => setIsOpen(false)} to={'/'}> {languageContext?.translation.header.navItems.homePage} </NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to={'/about-program'}> {languageContext?.translation.header.navItems.aboutProgram} </NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to={'/about-us'}> {languageContext?.translation.header.navItems.aboutUs} </NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to={'/contact-us'}> {languageContext?.translation.header.navItems.contactUs} </NavLink>
                    </nav>
                </Modal>
            }
        </>
    )
}