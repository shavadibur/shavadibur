import { useState } from 'react'
import style from './YouTubeVideo.module.css'
import { Loader } from '../../loader/Loader'

export const YouTubeVideo = ({ videoId }: { videoId: string }) => {

    const [isLoaded, setIsLoaded] = useState(true)

    return (
        <div className={style["youtube-video-container"]}>
            {isLoaded && <div className={style['video-loader']} > <Loader /> </div>}
            <iframe onLoad={()=>setIsLoaded(false)} className={style["youtube-video"]}
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}