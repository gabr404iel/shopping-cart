import './Contact.css'

export default function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact-container-div'>
                <div className='contact-info'>
                    <h1 className='contact-info-title'>Contact Us</h1>
                    <p className='contact-info-description'>If you have any question about our products or would like to send an enquiry, <br />contact our team and we will get back to you.</p>
                    <div className='contact-details-container'>
                        <div className='contact-details-phone'>
                            <div className='contact-details-phone-title'>Call Us</div>
                            <div className='contact-details-phone-number'>(+32) 520-3189</div>
                        </div>
                        <div className='contact-details-email'>
                            <div className='contact-details-email-title'>Email Us</div>
                            <div className='contact-details-email-address'>testing@gmail.com</div>
                        </div>
                    </div>
                </div>
                <form className='contact-form'>
                    <h1 className='contact-form-title'>Let's Talk 👋</h1>
                    <p className='contact-form-description'>Fill the form below and we will help you!</p>
                    <div className='contact-form-input-name'>
                        <label className='contact-form-input-name-label'>Name*</label><br />
                        <input className='contact-form-input-name-input' type='text' placeholder='Enter your name' required />
                    </div>
                    <div className='contact-form-input-email'>
                        <label className='contact-form-input-email-label'>Email*</label><br />
                        <input className='contact-form-input-email-input' type='email' placeholder='Enter your email' required />
                    </div>
                    <div className='contact-form-input-message'>
                        <label className='contact-form-input-message-label'>Message*</label><br />
                        <input className='contact-form-input-message-input' type='text' placeholder='Enter your message' required />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='contact-location'>
                <h1 className='contact-location-title'>Our Offices</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.5923421162533!2d-88.19144391763025!3d43.02653439232117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805a8417d911335%3A0xa1a7bce4b4070065!2s1923%20Stardust%20Dr%2C%20Waukesha%2C%20WI%2053186%2C%20USA!5e0!3m2!1sen!2smy!4v1679118877182!5m2!1sen!2smy" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <h1 className='contact-location-office'>Random Location I pinned on Google Maps</h1>
                <p className='contact-location-address'>123, Light St. Gasper Town, Ipvisem, Mars</p>
            </div>
        </div>
    )
}