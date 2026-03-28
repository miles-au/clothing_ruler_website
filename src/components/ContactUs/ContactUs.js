import React from 'react';

function ContactUs() {
    return (
        <div className="contact-us-page container">
            <section>
                <p className="page-kicker">Klothes App</p>
                <h2>Contact Us</h2>
            </section>

            <section>
                <p>
                    For any questions, concerns, or comments, please{' '}
                    <a href="mailto:miles.d.au@gmail.com">send an email</a>.
                </p>
            </section>

        </div>
    );
}

export default ContactUs;
