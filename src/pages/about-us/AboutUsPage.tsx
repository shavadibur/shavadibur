

import { useContext } from 'react'
import { YouTubeVideoList } from '../../components/you-tube/video-list/YouTubeVideoList'
import { YouTubeVideo } from '../../components/you-tube/video/YouTubeVideo'
import style from './AboutUsPage.module.css'
import { LanguageContext } from '../../context/LanguageContext'
import { AboutUsPageTranslation } from '../../types/translation'
import tictocIcon from '../../assets/icons/tictoc.png'
import youtubeIcon from '../../assets/icons/youtube.png'
export default function AboutUsPage() {

    const languageContext = useContext(LanguageContext)
    const aboutUsPageTranslation: AboutUsPageTranslation = languageContext?.getPageTranslation<AboutUsPageTranslation>('aboutUs')


    return (
        <div className={style['about-us-page']}>
            <div className={style['profile-container']}>
                <div className={style['welcome-video']}>
                    <YouTubeVideo videoId={'LhBHX3yOh9Q'} />
                </div>
                <div className={style['about-us-info']}>
                    <p className={style['paragraph']}>
                        {aboutUsPageTranslation.title}
                    </p>
                    <ul className={style['list']}>
                        <li className={style['list-item']}>
                            <span>🎓</span>
                            {aboutUsPageTranslation.p.part1}
                        </li>
                        <li className={style['list-item']}>
                            <span>📚</span>
                            {aboutUsPageTranslation.p.part2}
                        </li>
                        <li className={style['list-item']}>
                            <span>🙋🏽‍♀️</span>
                            {aboutUsPageTranslation.p.part3}
                        </li>
                        <li className={style['list-item']}>
                            <span>👩🏽‍🏫</span>
                            {aboutUsPageTranslation.p.part4}
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style['social-media']}>
                <div className={style['social-media-title']}>
                    <h1>{aboutUsPageTranslation.socialMediaTitle}</h1>
                </div>
                <div className={style['social-media-links']}>
                    <a href="https://www.tiktok.com/@litalvaknin?_t=ZS-8uKNRGyl3Qd&_r=1" target='_blank' rel="noreferrer">
                        <img width={100} src={tictocIcon} alt="tictocIcon" />
                    </a>
                    <a href="https://youtube.com/@lital--?si=mSu4YEOvgn_-kWK0" target='_blank' rel="noreferrer">
                        <img width={100} src={youtubeIcon} alt="youtubeIcon" />
                    </a>
                </div>
            </div>

            {/* <div className={style['video-list-container']}>
                <div>
                    <YouTubeVideoList videoIds={['LhBHX3yOh9Q', 'len3wsXD_d8', '2gnamyBamTU', 'V6BAcuJoXGY']} />
                </div>
            </div> */}
        </div>
    )
}