import React from 'react';
import './Home.scss';

const APP_STORE_URL = 'https://apps.apple.com/de/app/measure-sell-clothes-klothes/id1514959523?l=en-GB';
const EULA_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';
const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/klothes-clothing-listing/iagkjoebdobafkdihcebhfgaomckdfoo';

const marketplaces = ['Grailed', 'Poshmark', 'Depop', 'ThredUp', 'Vinted'];

const featureGroups = [
    {
        title: '(Beta) AI Clothing Ruler',
        description: 'Capture complete garment measurements at the press of a button. Point your camera, tap once, and instantly get measurements for fast listing sessions.',
    },
    {
        title: 'AR Ruler',
        description: 'Measure chest, length, inseam, sleeve, and more by capturing the distance between two points on your screen.',
    },
    {
        title: 'Chrome Extension',
        description: 'Move faster in your browser by carrying Klothes item data into marketplace listing forms and cutting down on copy and paste.',
    },
    {
        title: 'Photo Markers',
        description: 'Create measurement photos that clearly show how and where each garment was measured to build buyer trust.',
    },
    {
        title: 'One-Tap Item Details',
        description: 'Fill in colors, sizes, fabrics, and fit notes with smart suggestions instead of repetitive typing.',
    },
    {
        title: 'Templates',
        description: 'Reuse your favorite listing types, descriptions, and hashtags so repeat inventory is ready in seconds.',
    },
    {
        title: 'CSV Export',
        description: 'Export clean listing data for bulk marketplace uploads, spreadsheet tracking, or sharing with virtual assistants and extension-based workflows.',
    },
    {
        title: 'Item Tracking',
        description: 'Track each item from intake to sale with clear statuses for measured, photographed, listed, sold, and shipped.',
    },
];

const screenshotStories = [
    {
        title: 'Built for Clothing Resellers',
        body: 'Move from measurement to marketplace with inventory, measurements, exports, and uploads connected in one workflow.',
        image: '/media/screenshots/FinalScreen1_BuiltForResellers.png',
    },
    {
        title: 'List Faster With Smart Defaults',
        body: 'Smart suggestions, reusable templates, and saved tags help pre-fill listings with less repetitive typing.',
        image: '/media/screenshots/FinalScreen2_SmartDefaults.png',
    },
    {
        title: 'Zero Fuss Measurements',
        body: 'Ditch the measuring tape and capture standardized clothing measurements directly from your phone.',
        image: '/media/screenshots/FinalScreen4_ZeroFussMeasurements.png',
    },
    {
        title: 'Skip the Copy and Pasting',
        body: 'Use the Chrome extension to fill item details for you after exporting or preparing listing data in Klothes.',
        image: '/media/screenshots/FinalScreen3_SkipCopyPasting.png',
    },
];

const HomePage = () => (
    <div className="home-page">
        <section className="hero-section">
            <div className="hero-copy">
                <p className="eyebrow">Formerly Clothing Ruler</p>
                <h2>The fastest way to create professional resale listings.</h2>
                <p className="hero-body">
                    Klothes is your all-in-one assistant for fast, accurate, and consistent second-hand
                    clothing listings, so you can focus on sourcing and selling instead of typing and
                    measuring.
                </p>
                <p className="hero-supporting">
                    Turn piles of clothes into polished listings in a fraction of the time.
                </p>
                <div className="badge-container">
                    <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-badge">
                        <img className="store-badge-img" src={require('./apple_badge.png')} alt="Download on the App Store" />
                    </a>
                </div>
            </div>
            <div className="hero-side-column">
                <div className="hero-card marketplaces-section hero-marketplaces">
                    <p className="section-label">Designed for marketplaces like</p>
                <div className="marketplace-list">
                    {marketplaces.map((marketplace) => (
                        <span className="marketplace-pill" key={marketplace}>{marketplace}</span>
                    ))}
                </div>
            </div>

                <div className="extension-section">
                    <div className="extension-card extension-card-merged">
                        <p className="section-label">Chrome Extension</p>
                        <h3>Upload directly to marketplaces in minutes.</h3>
                        <p>
                            Klothes on iPhone handles measurement, item details, exports, and tracking.
                            The Chrome extension helps carry that work into your browser so you can skip
                            copy and paste when it is time to list.
                        </p>
                        <img
                            className="chrome-extension-badge"
                            src="/media/logos/chrome_extension_badge.png"
                            alt="Available in the Chrome Web Store"
                        />
                        <a href={CHROME_EXTENSION_URL} target="_blank" rel="noreferrer" className="cta-link">
                            View Chrome Extension
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="features-section">
            <div className="features-intro">
                <p className="section-label">Features</p>
                <h3>Everything needed for faster, more professional clothing listings.</h3>
            </div>
            <div className="features-grid">
                {featureGroups.map((feature) => (
                    <article className="feature-card" key={feature.title}>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>
        </section>

        <section className="screenshots-section">
            <div className="features-intro">
                <p className="section-label">Workflow Highlights</p>
            </div>
            <div className="screenshots-grid">
                {screenshotStories.map((story) => (
                    <article className="screenshot-card" key={story.title}>
                        <img className="screenshot-image" src={story.image} alt={story.title} />
                        <div className="screenshot-caption">
                            <p className="screenshot-title">{story.title}</p>
                            <p className="screenshot-copy">{story.body}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>

        <section className="cta-section">
            <p className="section-label">Available on iOS</p>
            <h3>Measure, list, export, and organize clothing inventory faster.</h3>
            <p>
                Klothes helps you sell more with less effort and present your shop like a top-tier store.
            </p>
            <div className="cta-actions">
                <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="cta-link">
                    View on the App Store
                </a>
                <a href={CHROME_EXTENSION_URL} target="_blank" rel="noreferrer" className="cta-link cta-link-secondary">
                    Chrome Extension
                </a>
                <a href={EULA_URL} target="_blank" rel="noreferrer" className="cta-link cta-link-secondary">
                    End User License Agreement
                </a>
            </div>
        </section>
    </div>
);

export default HomePage;
