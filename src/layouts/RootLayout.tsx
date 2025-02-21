import { Outlet } from "react-router";
import Header from "./header/Header";
import style from './RootLayout.module.css'

export default function RootLayout() {
    return (
        <>
            <header className={style['header']}>
                <Header />
            </header>
            <main className={style['main']}>
                <Outlet />
            </main>
            
        </>
    )
}