import React from 'react';
// import ContactImage from '../images/contact-img.png';

export default function Contact(props) {
    return (
        <section className="contact-section">
            <img src={props.img} className="card-image" alt="card_image" />
            <article className="contact-info">
                <h4>{props.name}</h4>
                <p><img src={require('../images/call-icon.png')} className="icon" alt="call_image" /> <span>{props.phone}</span></p>
                <p><img src={require('../images/mail-icon.png')} className="icon" alt="mail_image" /> <span>{props.email}</span></p>
            </article>
        </section>
    )
}