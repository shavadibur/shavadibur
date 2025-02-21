
import style from './CouresCard.module.css'
import courseGif from '../../../assets/gif/course.gif'

export default function CouresCard({ name, courseLevel, forWhoTitle, forWho, registerBtnText }: { name: string, courseLevel: string, forWhoTitle: string, forWho: string, registerBtnText: string }) {
    return (
        <div className={style['course-box']}>
            <div className={style['course-box-image']}>
                <img src={courseGif} alt="courseGif" />
            </div>
            <hr />
            <div>

                <div className={style['title-container']}>
                    <h4>{courseLevel}</h4>
                    <h1 className={style['title']}>{name}</h1>
                </div>
                <h3 className={style['sub-title']}>{forWhoTitle}</h3>
                <p className={style['for-who']}>{forWho}</p>
            </div>
            <div className={style['button-container']}>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdvvaVpTlmXl1ukwTiM0IaSEzN1TjJe2kmsvgy_ys1Xj1FIsA/viewform'
                    target='_blank'
                    className={style['button']}>{registerBtnText}</a>
            </div>
        </div>
    )
}