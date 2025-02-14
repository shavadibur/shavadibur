import style from './AboutProgramPage.module.css'
import programImage from '../../assets/picture/test.jpg'
import CouresCard from '../../components/cards/coures-card/CouresCard'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

export default function AboutProgramPage() {

    const languageContext = useContext(LanguageContext)

    return (
        <div className={style['about-program-page']}>
            <h1 className={style['title']}> &nbsp; {languageContext?.translation.header.navItems.aboutProgram} &nbsp; </h1>
            <div className={style['coures-info']}>
                <p>קורסי עברית מדוברת בזום | 10 מפגשים</p>
                <p>כל מפגש: שעתיים אקדמיות</p>
            </div>
            <img className={style['img']} src={programImage} alt="programImage" />
            <div className={style['coures']}>
                <CouresCard
                    name={'כיף להתחיל'}
                    forWho={'מתאים למי שיודע.ת לקרוא ולכתוב בעברית ורוצה לשבור את מחסום השפה ולהתחיל לדבר!'} 
                    courseLevel={'01'}                />
                <CouresCard
                    name={'בואו נמשיך'}
                    forWho={'מתאים למי שיש לו.ה ידע בסיסי בשפה, ורוצה להרחיב ולהעמיק את מיומנות הדיבור!'} 
                    courseLevel={'02'}                />
            </div>
           
        </div>
    )
}