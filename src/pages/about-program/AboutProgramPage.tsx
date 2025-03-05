import style from './AboutProgramPage.module.css'
import programImage from '../../assets/picture/test.jpg'
import CouresCard from '../../components/cards/coures-card/CouresCard'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { AboutProgramPageTranslation } from '../../types/translation'

export default function AboutProgramPage() {

    const languageContext = useContext(LanguageContext)
    const aboutProgramPageTranslation: AboutProgramPageTranslation = languageContext?.getPageTranslation<AboutProgramPageTranslation>('aboutProgram')

    return (
        <div className={style['about-program-page']}>
            <h1 className={style['title']}> &nbsp; {aboutProgramPageTranslation.title} &nbsp; </h1>
            <div className={style['coures-info']}>
                <p className={style['coures-info-p1']}>
                    {aboutProgramPageTranslation.courseInfo.p1}
                </p>
                <p className={style['coures-info-p2']}>
                    {aboutProgramPageTranslation.courseInfo.p2}
                    <br />
                    {aboutProgramPageTranslation.courseInfo.cost}
                    <span className={style['price']}>{aboutProgramPageTranslation.courseInfo.price}</span>
                </p>
                <p className={style['coures-info-p3']}>
                    {aboutProgramPageTranslation.courseInfo.p3.part1}
                    <span className={style['practice-time']}>
                        {` ${aboutProgramPageTranslation.courseInfo.p3.part2} `}
                    </span>
                    {aboutProgramPageTranslation.courseInfo.p3.part3}
                </p>
                <p className={style['coures-info-p4']}>
                    {aboutProgramPageTranslation.courseInfo.p4}
                </p>
            </div>
            <img className={style['img']} src={programImage} alt="programImage" />
            <div className={style['coures']}>
                {
                    aboutProgramPageTranslation.courses.map((course, index) => {
                        return (
                            <CouresCard
                                key={index}
                                name={course.name}
                                forWhoTitle={course.forWhoTitle}
                                forWho={course.forWho}
                                courseLevel={course.courseLevel}
                                registerBtnText={course.registerBtnText} />
                        )
                    })
                }
                {/* <CouresCard
                    name={'כיף להתחיל'}
                    forWho={'מתאים למי שיודע.ת לקרוא ולכתוב בעברית ורוצה לשבור את מחסום השפה ולהתחיל לדבר!'}
                    courseLevel={'רמה 01'}
                    registerBtnText={'להרשמה'} />
                <CouresCard
                    name={'בואו נמשיך'}
                    forWho={'מתאים למי שיש לו.ה ידע בסיסי בשפה, ורוצה להרחיב ולהעמיק את מיומנות הדיבור!'}
                    courseLevel={'רמה 02'}
                    registerBtnText={'להרשמה'} /> */}
            </div>

        </div>
    )
}