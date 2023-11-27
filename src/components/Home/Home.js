import React from 'react';
import './Home.scss';

const HomePage = () => (
    <div className="home-page">
        <section className="mw5 mw7-ns center pa3 ph5-ns" >
            <div className="badge-container">
                <a href="https://apps.apple.com/us/app/clothing-ruler-measure-in-ar/id1514959523" target="_blank" className="store-badge">
                    <img className="store-badge-img" src={require('./apple_badge.png')} alt="download on the app store" />
                </a>
            </div>
        </section>
        <section className="mw5 mw7-ns center pa3 ph5-ns" >
            <div className="badge-container">
                
            </div>
        </section>
    </div>
);

export default HomePage;