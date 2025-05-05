import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

// Client logos
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

// Social icons
import linkedin from '../../assets/linkedin.png';
import telegram from '../../assets/telegram.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                'service_y50mskg',        // ✅ Service ID
                'template_owa89qs',       // ✅ Template ID
                form.current,
                'ykCi4CKrGsXO7avTw'       // ✅ Public Key
            );
            console.log(result.text);
            alert('Email sent successfully!');
            e.target.reset();
        } catch (error) {
            console.error('Email error:', error.text);
            alert('Failed to send email. Please try again later.');
        }
    };

    return (
        <div id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I’ve had the opportunity to work with some great companies:
                </p>
                <div className="clientImgs">
                    {[Walmart, Adobe, Microsoft, Facebook].map((logo, index) => (
                        <img key={index} src={logo} alt="Client" className="clientImg" />
                    ))}
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <p className="contactDesc">Fill out the form below to get in touch!</p>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="from_name"
                        className="name"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="from_email"
                        className="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        className="msg"
                        required
                    ></textarea>
                    <button type="submit" className="submitBtn">Submit</button>

                    <div className="links">
    {[
        { icon: linkedin, url: 'https://www.linkedin.com/in/piyushsingh7/' },
        { icon: telegram, url: 'https://t.me/PiyushSing7' },
        { icon: youtubeIcon, url: 'https://www.youtube.com/@S-BBTs' },
        { icon: instagramIcon, url: 'https://www.instagram.com' },
    ].map((item, i) => (
        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt="Social" className="link" />
        </a>
    ))}
</div>

                </form>
            </div>
        </div>
    );
};

export default Contact;
