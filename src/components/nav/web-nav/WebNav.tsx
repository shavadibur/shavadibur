import { useContext } from "react"
import { LanguageContext } from "../../../context/LanguageContext"
import { NavLink } from "react-router"
import style from './WebNav.module.css'

export default function Nav () {

    const languageContext = useContext(LanguageContext)

    return (
            <nav className={style['nav']}>
                <NavLink to={'/'}> {languageContext?.translation.header.navItems.homePage} </NavLink>
                <NavLink to={'/about-program'}> {languageContext?.translation.header.navItems.aboutProgram} </NavLink>
                <NavLink to={'/about-us'}> {languageContext?.translation.header.navItems.aboutUs} </NavLink>
                <NavLink to={'/contact-us'}> {languageContext?.translation.header.navItems.contactUs} </NavLink>
            </nav>
    )
}