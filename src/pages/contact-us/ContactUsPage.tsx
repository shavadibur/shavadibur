import EmailForm from "../../components/email-form/EmailForm";
import contactUsImage from '../../assets/picture/contact-us.jpg'
import style from './ContactUsPage.module.css'
import { ContactLink } from "../../components/contact-link/ContactLink";

import phoneIcon from '../../assets/icons/phone.svg'
import emailIcon from '../../assets/icons/email.svg'
import whatsAppIcon from '../../assets/icons/whatsapp.svg'
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ContactUsPageTranslation } from "../../types/translation";

export default function ContactUsPage() {

    const languageContext = useContext(LanguageContext)
    const contactUsPageTranslation: ContactUsPageTranslation = languageContext?.getPageTranslation<ContactUsPageTranslation>('contactUs')


    return (
        <>
            <h1 className={style['title']}>
                {/* בואו נדבר */}
                {contactUsPageTranslation.title}
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
                            contactInfo={contactUsPageTranslation.whatapp}
                            // contactInfo={"צאט בוואטסאפ"}
                        />
                    </div>
                    <div className={style['email-form']}>
                        <EmailForm 
                            username={contactUsPageTranslation.form.username} 
                            phone={contactUsPageTranslation.form.phone} 
                            message={contactUsPageTranslation.form.message} 
                            submitBtn={contactUsPageTranslation.form.submitBtn} />
                    </div>
                </div>

            </div>
        </>
    )
}