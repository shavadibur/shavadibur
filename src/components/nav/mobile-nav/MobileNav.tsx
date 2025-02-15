import { NavLink } from "react-router"
import style from './MobileNav.module.css'
import { useContext, useState } from "react"
import { LanguageContext } from "../../../context/LanguageContext"
import { createPortal } from "react-dom"

import mobileMenuIcon from '../../../assets/icons/burger-menu.svg'

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
                createPortal(
                    <div className={style['mobile-nav-container']}>
                        <nav className={style['mobile-nav']}>
                            <NavLink onClick={() => setIsOpen(false)} to={'/'}> {languageContext?.translation.header.navItems.homePage} </NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to={'/about-program'}> {languageContext?.translation.header.navItems.aboutProgram} </NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to={'/about-us'}> {languageContext?.translation.header.navItems.aboutUs} </NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to={'/contact-us'}> {languageContext?.translation.header.navItems.contactUs} </NavLink>
                        </nav>
                    </div>, document.getElementById('portal')!
                )
            }
        </>
    )
}