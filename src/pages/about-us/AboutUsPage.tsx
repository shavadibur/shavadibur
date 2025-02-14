

import { YouTubeVideoList } from '../../components/you-tube/video-list/YouTubeVideoList'
import { YouTubeVideo } from '../../components/you-tube/video/YouTubeVideo'
import style from './AboutUsPage.module.css'
export default function AboutUsPage() {
    return (
        <div className={style['about-us-page']}>
            <div className={style['profile-container']}>
                <div className={style['welcome-video']}>
                    <YouTubeVideo videoId={'LhBHX3yOh9Q'} />
                </div>
                <div className={style['about-us-info']}>
                    <p className={style['paragraph']}>
                        המייסדת והמנהלת הפדגוגית של התוכנית
                    </p>
                    <ul className={style['list']}>
                        <li className={style['list-item']}>
                            <span>🎓</span>
                            <span>בעלת תואר ראשון בחינוך סוצילוגיה- אנתרופולוגיה ותואר שני במדיניות ציבורית מהאוניברסיטה העברית.</span>
                        </li>
                        <li className={style['list-item']}>
                            <span>📚</span>
                            <span>בעלת תעודת הוראה "בעברית כשפה שנייה" מטעם האוניברסיטה העברית ותעודת הוראה "בעברית כשפה נוספת" מטעם הקריה האקדמית אונו.</span>
                        </li>
                        <li className={style['list-item']}>
                            <span>🙋🏽‍♀️</span>
                            <span>אחראית תחום למידת השפה העברית במזרח ירושלים בארגון "חותם".</span>
                        </li>
                        <li className={style['list-item']}>
                            <span>👩🏽‍🏫</span>
                            <span>בעלת ניסיון של למעלה מעשור בהוראת ולמידת השפה העברית במגזר הערבי.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style['video-list-container']}>
                <YouTubeVideoList videoIds={['LhBHX3yOh9Q', 'len3wsXD_d8', '2gnamyBamTU' ,'V6BAcuJoXGY']} />
            </div>
        </div>
    )
}