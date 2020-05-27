import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { NavBar } from 'ventura/components/organisms/NavBar/NavBar';
import { store } from 'ventura/globals';
import { BrowsePage } from 'ventura/pages/Browse/Browse';
import './App.scss';
import './globals/filterThirdPartyWarnings';

export const App = () => (
  <Provider store={store}>
    <>
      <NavBar
        logoSrc="/static/logo.png"
        menuItems={['Discover', 'Browse', 'Try Prime']}
      />
      <Router history={createBrowserHistory()}>
        <Route component={BrowsePage} />
      </Router>
    </>
  </Provider>
);
