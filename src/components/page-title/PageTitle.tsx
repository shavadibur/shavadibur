
import style from './PageTitle.module.css'

export default function PageTitle({title ,styles}:{title:string ,styles :React.CSSProperties}) {
    return (
        <section className={style['page-title']} style={styles}>
            <div className={style['overlay']}>
                <h1>{title}</h1>
            </div>
        </section>
    )
}