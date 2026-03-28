import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="privacy-policy-page container">
            <section>
                <p className="page-kicker">SwiftyIndie</p>
                <h2>Privacy Policy</h2>
            </section>

            <section>
                <p>
                    This Privacy Policy applies to mobile applications and related services published
                    by Kyle Au through SwiftyIndie, unless a specific app includes its own separate
                    privacy policy.
                </p>
                <p>
                    We try to collect as little information as possible. Most apps do not require you
                    to create an account, and we do not intentionally collect information that directly
                    identifies you, such as your name, mailing address, or government-issued
                    identifiers, unless you choose to contact us directly.
                </p>
                <p>
                    If we send customer attributes or identifiers to RevenueCat or related services,
                    those may include information such as an internal user ID, email address, or other
                    data you choose to provide, but only where needed for account, purchase, support,
                    or subscription functionality.
                </p>
                <p>
                    We do not use analytics data to personally identify you, and we do not sell your
                    personal information.
                </p>
                <p>
                    If you email us for support or feedback, we will receive the information you
                    choose to include in your message, such as your email address and the contents of
                    your request. We use that information only to respond to you and manage the
                    conversation.
                </p>
                <p>
                    Some apps may store data locally on your device, such as preferences, settings,
                    saved items, or app state. That data is generally controlled by you and remains on
                    your device unless a feature clearly tells you otherwise.
                </p>
                <p>
                    We keep information only for as long as reasonably necessary for the purposes
                    described in this policy, including maintaining the app, improving performance,
                    complying with legal obligations, and resolving disputes.
                </p>
                <p>
                    Our apps are not directed to children under 13, and we do not knowingly collect
                    personal information from children under 13. If you believe a child has provided
                    us personal information, please contact us so we can review and delete it if
                    appropriate.
                </p>
            </section>

            <section>
                <h3>Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:miles.d.au@gmail.com">miles.d.au@gmail.com</a>.
                </p>
            </section>

            <section>
                <h3>Changes to This Privacy Policy</h3>
                <p>
                    We may update this Privacy Policy from time to time. When we do, we will post the
                    updated version on this page. Your continued use of an app after an update becomes
                    effective means you accept the revised policy.
                </p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
