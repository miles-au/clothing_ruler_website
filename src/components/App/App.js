import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Header from './Header';

import HomePage from '../Home/Home';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Terms from '../Terms/Terms';
import ContactUs from '../ContactUs/ContactUs';


function App() {
  return (
    <Router>
      <Header />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.PRIVACY_POLICY} component={PrivacyPolicy} />
      <Route path={ROUTES.TERMS} component={Terms} />
      <Route path={ROUTES.CONTACT_US} component={ContactUs} />
    </Router>
  );
}

export default App;
