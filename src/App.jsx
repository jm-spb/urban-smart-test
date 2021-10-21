import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const App = () => (
  <div className="index-page">
    <Route exact path="/" component={HomePage} />
    <Route exact path="/profile" component={ProfilePage} />
  </div>
);

export default App;
