import LanguagesSelector from "../../components/languages-selector/LanguagesSelector";
import Nav from "../../components/nav/Nav";
import style from './Header.module.css'
import worthTalkIcon from '../../assets/icons/worth-talk-icon.png'

export default function Header() {
    return (
        <>
            <div className={style['languages']}>
                <LanguagesSelector />
            </div>
            <div className={style['nav']}>
                <Nav />
            </div>
            <div className={style['logo']}>
                {/* <img width={40} src={worthTalkIcon} alt="worthTalkIcon" /> */}
            </div>
        </>
    )
}