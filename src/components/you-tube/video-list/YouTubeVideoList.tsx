import { YouTubeVideo } from "../video/YouTubeVideo"
import style from './YouTubeVideoList.module.css'


export const YouTubeVideoList = ({ videoIds }: { videoIds: string[] }) => {
    return (
        <div className={style["youtube-video-list"]}>

            {
                videoIds.map((videoId) => (
                    <div className={style["youtube-video-list-item"]}>
                        <YouTubeVideo
                            key={videoId}
                            videoId={videoId}
                        />
                    </div>
                ))
            }
        </div>
    )
}