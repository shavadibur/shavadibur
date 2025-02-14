import style from './ContactLink.module.css'
export const ContactLink = (
    {
        linkHref,
        imgSrc,
        imgAlt,
        contactInfo
    }: {
        linkHref: string,
        imgSrc: string,
        imgAlt: string,
        contactInfo: string
    }) => {
    return (
        <a className={style['contact-link']} href={linkHref} target='_blank'>
            <img className={style['contact-link-image']} src={imgSrc} alt={imgAlt} />
            <span className={style['contact-link-info']}> {contactInfo} </span>
        </a>
    )
}