import React from 'react';
import './Home.scss';

const APP_STORE_URL = 'https://apps.apple.com/gr/app/klothes-measure-and-organize/id1514959523/';

const features = [
    'Quickly measure your clothes with Augmented Reality',
    'Tap more, type less. We\'ll make guesses about your item\'s details',
    'Export and share your items',
    'Stay organized with the status of your items',
];

const HomePage = () => (
    <div className="home-page">
        <section className="hero-section">
            <div className="hero-copy">
                <p className="eyebrow">The Wardrobe to Web Fastlane</p>
                <h2>Measure, describe, export, and organize your clothing inventory faster.</h2>
                <p className="hero-body">
                    Klothes helps resellers turn piles of garments into polished listings with less typing
                    and fewer repetitive steps.
                </p>
                <div className="badge-container">
                    <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-badge">
                        <img className="store-badge-img" src={require('./apple_badge.png')} alt="Download on the App Store" />
                    </a>
                </div>
            </div>
            <div className="hero-card">
                <p className="hero-card-label">Built for quick resale workflows</p>
                <ul className="hero-checklist">
                    <li>AR-assisted measurements</li>
                    <li>Faster item detail entry</li>
                    <li>Export-ready listings</li>
                    <li>Status tracking for every piece</li>
                </ul>
            </div>
        </section>

        <section className="features-section">
            {features.map((feature) => (
                <article className="feature-card" key={feature}>
                    <p>{feature}</p>
                </article>
            ))}
        </section>

        <section className="cta-section">
            <p>Available on iOS.</p>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="cta-link">
                Download the app on iOS
            </a>
        </section>
    </div>
);

export default HomePage;
