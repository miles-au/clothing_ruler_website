import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = () => {
    return (
        <header className="site-header">
            <Link className="logo-link" to={ROUTES.HOME} aria-label="Klothes home">
                <div className="logo">
                    <img className="logo-icon" src={require('./icon.png')} alt='Klothes logo' />
                    <div>
                        <p className="logo-kicker">Klothes App</p>
                        <h1 className="logo-text">Klothes</h1>
                    </div>
                </div>
            </Link>
            <nav className="site-nav" aria-label="Primary">
                <Link to={ROUTES.HOME}>Home</Link>
                <Link to={ROUTES.CONTACT_US}>Contact Us</Link>
                <Link to={ROUTES.TERMS}>Terms</Link>
                <Link to={ROUTES.PRIVACY_POLICY}>Privacy</Link>
            </nav>
        </header>
    );
}

export default Header;
