import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './EmailForm.module.css'


export type EmailFormProps = {
    username: string,
    phone: string,
    message: string,
    submitBtn: string   
}

export default function EmailForm(emailFormProps:EmailFormProps) {



    const formRef = useRef<HTMLFormElement>(null);
    const [errorMessage, setErrorMessage] = useState<string>('')

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('')
        const username = formRef.current?.user_name.value;
        const phone = formRef.current?.user_phone.value;
        const message = formRef.current?.message.value;

        if (!phone || !username || !message) {
            setErrorMessage('אנא מלא את כל השדות');
            return
        }

        if (formRef && formRef.current) {
            emailjs
                .sendForm('service_4x3tjlk', 'template_mvfnwn5', formRef.current, {
                    publicKey: 'BAo8A4gkheJ2aFmka',
                })
                .then(
                    () => {
                        formRef.current?.reset();
                    },
                    (error) => {
                        console.log(error.text);
                        setErrorMessage('אירעה שגיאה, אנא נסה שנית מאוחר יותר')
                    }
                )
        }
    }

    return (
        <form className={style['form']} ref={formRef} onSubmit={(e) => { sendEmail(e) }}>
            <div className={style['form-div']}>
                <label htmlFor='user_name'>{emailFormProps.username}</label>
                <input type="text" name="user_name" id='user_name'/>
            </div>
            <div className={style['form-div']}>
                <label htmlFor='user_phone'>{emailFormProps.phone}</label>
                <input type="tel" name="user_phone" id='user_phone' onChange={(e)=>{
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
                }} />
            </div>
            <div className={style['form-div']}>
                <label htmlFor='message'>{emailFormProps.message}</label>
                <textarea name="message" id='message'/>
            </div>
            <div className={`${style['form-submit']}`}>
                <input type="submit" id='submit' name='submit' value={emailFormProps.submitBtn} />
            </div>
            <p className={style['error-message']}>{errorMessage}</p>
        </form>
    )
}