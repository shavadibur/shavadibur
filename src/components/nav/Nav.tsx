
import { MobileNav } from "./mobile-nav/MobileNav"
import WebNav from "./web-nav/WebNav"
import style from './Nav.module.css'
export default function Nav() {

    return (
        <>
            <div className={style['web-nav']}>
                <WebNav />
            </div>
            <div className={style['mobile-nav']}>
                <MobileNav />
            </div>
        </>
    )
}