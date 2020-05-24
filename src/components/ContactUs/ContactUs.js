import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function ContactUs() {
    return (
        <div className="contact-us-page container">
            <section className="mw5 mw7-ns pa3 ph5-ns">
                <h1 className="brandDarkPurple">Contact Us</h1>
            </section>

            <section>
                <p>For any questions, concerns, or comments, please <a href="mailto:miles.d.au@gmail.com">send an email</a>.</p>
            </section>

        </div>
    );
}

export default ContactUs;