import PageTitle from "../../components/page-title/PageTitle";
import homeImage from '../../assets/picture/home-page.jpg'
import style from './HomePage.module.css'
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import icon5 from '../../assets/icons/icon5.png'
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { HomePageTranslation } from "../../types/translation";


export default function HomePage() {

    const languageContext = useContext(LanguageContext)
    const homePageTranslation: HomePageTranslation  = languageContext?.getPageTranslation<HomePageTranslation>('home')
    
    return (
        <>
            <PageTitle
                title={homePageTranslation.title}
                styles={{
                    backgroundImage: `url(${homeImage})`,
                    backgroundPosition: `50% 20%`
                }} />

            <section className={style['section']}>
                <p className={style['main-pragraph']}>
                    {homePageTranslation.mainParagraph}
                    {/* <span className={style['bold-text']}> "שווה דיבור" </span> היא תוכנית ללמידת עברית מדוברת.
                    התוכנית מתמקדת בפיתוח מיומנות הדיבור ובשבירת מחסום השפה.
                    זאת מתוך הבנה שהיכולת <span className={style['bold-text']}>לדבר, להתבטא ולתקשר</span> בעברית היא המפתח להשתלבות ולהתקדמות אישית ומקצועית. */}
                </p>
            </section>

            <section className={style['section']}>
                <h2>
                    {homePageTranslation.ourGoals.title}
                </h2>
                <ol className={style['list']}>
                    <li>
                        <img src={icon1} alt="icon1" />
                        <p>
                            {homePageTranslation.ourGoals.cards[0].content}
                        </p>
                    </li>
                    <li>
                        <img src={icon2} alt="icon2" />
                        <p>
                            {homePageTranslation.ourGoals.cards[1].content}
                        </p>
                    </li>
                    <li>
                        <img src={icon3} alt="icon3" />
                        <p>
                            {homePageTranslation.ourGoals.cards[2].content}
                        </p>
                    </li>
                    <li>
                        <img src={icon4} alt="icon4" />
                        <p>
                            {homePageTranslation.ourGoals.cards[3].content}
                        </p>
                    </li>
                </ol>

                <h2>
                    {homePageTranslation.whyUs.title}
                </h2>
                <ol className={style['list']}>
                    <li>
                        <img src={icon5} alt="icon5" />
                        <p>
                            {homePageTranslation.whyUs.cards[0].content}
                        </p>
                    </li>
                    <li>
                        <img src={icon5} alt="icon5" />
                        <p>
                            {homePageTranslation.whyUs.cards[1].content}
                        </p>
                    </li>
                    <li>
                        <img src={icon5} alt="icon5" />
                        <p>
                            {homePageTranslation.whyUs.cards[2].content}
                        </p>
                    </li>
                </ol>
            </section>
        </>
    )
}