import React from 'react';
import './Home.scss';

const HomePage = () => (
    <div className="home-page container">
        <h1 className="mt0">Download the mobile app</h1>
        <section className="mw5 mw7-ns center pa3 ph5-ns" >
            <div className="badge-container">
                <a href="/" target="_blank" className="store-badge">
                    <img className="store-badge-img" src={require('./apple_badge.png')} alt="download on the app store" />
                </a>
                <a href="/" target="_blank" className="store-badge">
                    <img className="store-badge-img" src={require('./google_badge.png')} alt="get it on google play" />
                </a>
            </div>
        </section>
    </div>
);

export default HomePage;