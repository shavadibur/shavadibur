import EmailForm from "../../components/email-form/EmailForm";
import contactUsImage from '../../assets/picture/contact-us.jpg'
import style from './ContactUsPage.module.css'
import { ContactLink } from "../../components/contact-link/ContactLink";

import phoneIcon from '../../assets/icons/phone.svg'
import emailIcon from '../../assets/icons/email.svg'
import whatsAppIcon from '../../assets/icons/whatsapp.svg'

export default function ContactUsPage() {
    return (
        <>
            <h1 className={style['title']}>
                בואו נדבר
            </h1>
            <div className={style['contact-us-info-container']}>
                <div className={style['contact-us-image']}>
                    <img src={contactUsImage} />
                </div>
                <div className={style['contact-us-info']}>
                    <div className={style['contact-us-info-links']}>
                        <ContactLink 
                            linkHref={"tel:0585231993"} 
                            imgSrc={phoneIcon} 
                            imgAlt={"phoneIcon"} 
                            contactInfo={`0585231993`} 
                        /> 
                        <ContactLink 
                            linkHref={"mailto:shavadibur@gmail.com"} 
                            imgSrc={emailIcon} 
                            imgAlt={"emailIcon"} 
                            contactInfo={"shavadibur@gmail.com"} 
                        />
                        <ContactLink 
                            linkHref={"https://wa.me/972585231993"} 
                            imgSrc={whatsAppIcon} 
                            imgAlt={"emailIcon"} 
                            contactInfo={"צאט בוואטסאפ"} 
                        />
                    </div>
                    <div className={style['email-form']}>
                        <EmailForm />
                    </div>
                </div>

            </div>
        </>
    )
}