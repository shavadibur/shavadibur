import PageTitle from "../../components/page-title/PageTitle";
import homeImage from '../../assets/picture/home-page.jpg'
import style from './HomePage.module.css'
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import icon5 from '../../assets/icons/icon5.png'


export default function HomePage() {
    return (
        <>
            <PageTitle
                title={"שווה דיבור"}
                styles={{
                    backgroundImage: `url(${homeImage})`,
                    backgroundPosition: `50% 20%`
                }} />

            <section className={style['section']}>
                <p className={style['main-pragraph']}>
                    <span className={style['bold-text']}> "שווה דיבור" </span> היא תוכנית ללמידת עברית מדוברת.
                    התוכנית מתמקדת בפיתוח מיומנות הדיבור ובשבירת מחסום השפה.
                    זאת מתוך הבנה שהיכולת <span className={style['bold-text']}>לדבר, להתבטא ולתקשר</span> בעברית היא המפתח להשתלבות ולהתקדמות אישית ומקצועית.
                </p>
            </section>

            <section className={style['section']}>
                <h2>מה המטרות שלנו?</h2>
                <ol className={style['list']}>
                    <li>
                        <img src={icon1} alt="icon1" />
                        <p>
                            ללמוד עברית בדרך פשוטה וחוויתית
                        </p>
                    </li>
                    <li>
                        <img src={icon2} alt="icon2" />
                        <p>
                            לאפשר מרחב בטוח ללמידה, לדיבור ולביטוי עצמי
                        </p>
                    </li>
                    <li>
                        <img src={icon3} alt="icon3" />
                        <p>
                            ללמוד להשתמש בשפה העברית ככלי להצלחה ולפתיחת דלתות חדשות
                        </p>
                    </li>
                    <li>
                        <img src={icon4} alt="icon4" />
                        <p>
                            לשפר את הביטחון העצמי ואת תחושת המסוגלות
                        </p>
                    </li>
                </ol>

                <h2>למה כדאי ללמוד איתנו?</h2>
                <ol className={style['list']}>
                    <li>
                        <img src={icon5} alt="icon5" />
                        <p>
                            נלמד לדבר עברית כבר מהמפגש הראשון!
                        </p>
                    </li>
                    <li>
                        <img src={icon5} alt="icon5" />
                        <p>
                            למידה בקבוצות קטנות
                        </p>
                    </li>
                    <li>
                        <img src={icon5} alt="icon5" />
                        <p>
                            אפשר ללמוד מכל מקום- הלמידה מתקיימת בזום!
                        </p>
                    </li>
                </ol>
            </section>
        </>
    )
}